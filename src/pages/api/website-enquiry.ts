import { getSecret } from "astro:env/server";

export const prerender = false;

type EnquiryType = "takeaway" | "driver" | "general" | "partnership";

type IncomingValue = FormDataEntryValue | null | undefined;
type IncomingPayload = Record<string, unknown>;

const allowedEnquiryTypes = new Set<EnquiryType>([
  "takeaway",
  "driver",
  "general",
  "partnership"
]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxLengths = {
  businessName: 160,
  city: 120,
  deliveryExperience: 500,
  email: 254,
  message: 4000,
  name: 160,
  organisationName: 160,
  phone: 50,
  postcode: 40,
  roughUsage: 500,
  subject: 180,
  vehicleType: 120
};

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    status
  });
}

function stringValue(value: IncomingValue) {
  return typeof value === "string" ? value.trim() : "";
}

function limited(value: string, maxLength: number) {
  return value.length <= maxLength;
}

function optional(value: string) {
  return value.length > 0 ? value : null;
}

function friendlyValidationError(message = "Please check the form and try again.") {
  return jsonResponse({ ok: false, message }, 400);
}

async function readPayload(request: Request): Promise<IncomingPayload | null> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = await request.json();
    return body && typeof body === "object" && !Array.isArray(body)
      ? (body as IncomingPayload)
      : null;
  }

  if (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  ) {
    const formData = await request.formData();
    return Object.fromEntries(formData.entries());
  }

  return null;
}

function normalizedPayload(payload: IncomingPayload) {
  const enquiryType = stringValue(payload.enquiryType as IncomingValue);
  const name = stringValue(payload.name as IncomingValue);
  const email = stringValue(payload.email as IncomingValue).toLowerCase();
  const message = stringValue(payload.message as IncomingValue);
  const businessName = stringValue(payload.businessName as IncomingValue);
  const organisationName = stringValue(payload.organisationName as IncomingValue);
  const phone = stringValue(payload.phone as IncomingValue);
  const city = stringValue(payload.city as IncomingValue);
  const postcode = stringValue(payload.postcode as IncomingValue);
  const subject = stringValue(payload.subject as IncomingValue);
  const roughUsage = stringValue(payload.roughUsage as IncomingValue);
  const vehicleType = stringValue(payload.vehicleType as IncomingValue);
  const deliveryExperience = stringValue(payload.deliveryExperience as IncomingValue);

  return {
    businessName,
    city,
    deliveryExperience,
    email,
    enquiryType,
    message,
    name,
    organisationName,
    phone,
    postcode,
    roughUsage,
    subject,
    vehicleType
  };
}

function validatePayload(payload: IncomingPayload, requestTime: number) {
  const honeypot = stringValue(payload.website as IncomingValue);

  if (honeypot.length > 0) {
    return { error: "Please check the form and try again." };
  }

  const startedAt = Number(stringValue(payload.startedAt as IncomingValue));

  if (Number.isFinite(startedAt) && startedAt > 0 && requestTime - startedAt < 1200) {
    return { error: "Please check the form and try again." };
  }

  const normalized = normalizedPayload(payload);

  if (!allowedEnquiryTypes.has(normalized.enquiryType as EnquiryType)) {
    return { error: "Please choose an enquiry type and try again." };
  }

  if (!normalized.name || !limited(normalized.name, maxLengths.name)) {
    return { error: "Please enter your name." };
  }

  if (
    !normalized.email ||
    !emailPattern.test(normalized.email) ||
    !limited(normalized.email, maxLengths.email)
  ) {
    return { error: "Please enter a valid email address." };
  }

  if (!normalized.message || !limited(normalized.message, maxLengths.message)) {
    return { error: "Please add a message." };
  }

  const lengthChecks: Array<[string, string, number]> = [
    ["business name", normalized.businessName, maxLengths.businessName],
    ["organisation name", normalized.organisationName, maxLengths.organisationName],
    ["phone", normalized.phone, maxLengths.phone],
    ["town or city", normalized.city, maxLengths.city],
    ["postcode or area", normalized.postcode, maxLengths.postcode],
    ["subject", normalized.subject, maxLengths.subject],
    ["expected usage or notes", normalized.roughUsage, maxLengths.roughUsage],
    ["vehicle type", normalized.vehicleType, maxLengths.vehicleType],
    ["delivery experience", normalized.deliveryExperience, maxLengths.deliveryExperience]
  ];

  for (const [label, value, maxLength] of lengthChecks) {
    if (!limited(value, maxLength)) {
      return { error: `Please shorten the ${label} field.` };
    }
  }

  return { data: normalized };
}

function supabaseEnv() {
  const supabaseUrl = getSecret("SUPABASE_URL")?.trim() ?? "";
  const serviceRoleKey = getSecret("SUPABASE_SERVICE_ROLE_KEY")?.trim() ?? "";

  return { serviceRoleKey, supabaseUrl };
}

export async function POST({ request }: { request: Request }) {
  const requestTime = Date.now();
  const payload = await readPayload(request).catch(() => null);

  if (!payload) {
    return friendlyValidationError();
  }

  const validation = validatePayload(payload, requestTime);

  if ("error" in validation) {
    return friendlyValidationError(validation.error);
  }

  const { serviceRoleKey, supabaseUrl } = supabaseEnv();

  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse(
      { ok: false, message: "Your enquiry could not be sent right now. Please email us instead." },
      503
    );
  }

  const data = validation.data;
  const metadata = {
    deliveryExperience: optional(data.deliveryExperience),
    referrer: request.headers.get("referer"),
    roughUsage: optional(data.roughUsage),
    submittedPath: new URL(request.url).pathname,
    userAgent: request.headers.get("user-agent"),
    vehicleType: optional(data.vehicleType)
  };
  const insertBody = {
    business_name: optional(data.businessName),
    city: optional(data.city),
    email: data.email,
    enquiry_type: data.enquiryType,
    message: data.message,
    metadata,
    name: optional(data.name),
    organisation_name: optional(data.organisationName),
    phone: optional(data.phone),
    postcode: optional(data.postcode),
    source: "eddhub-public-site",
    subject: optional(data.subject)
  };
  const supabaseEndpoint = `${supabaseUrl.replace(/\/+$/, "")}/rest/v1/website_enquiries`;

  try {
    const response = await fetch(supabaseEndpoint, {
      body: JSON.stringify(insertBody),
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      method: "POST"
    });

    if (!response.ok) {
      return jsonResponse(
        { ok: false, message: "Your enquiry could not be sent right now. Please email us instead." },
        502
      );
    }

    return jsonResponse({ ok: true }, 201);
  } catch {
    return jsonResponse(
      { ok: false, message: "Your enquiry could not be sent right now. Please email us instead." },
      502
    );
  }
}

export function ALL() {
  return jsonResponse({ ok: false, message: "Method not allowed." }, 405);
}
