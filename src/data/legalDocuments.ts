export const legalDocuments = [
  {
    title: "Legal document register and app upload guide",
    slug: "legal-document-register",
    category: "reference",
    summary:
      "Register of the current EDD Hub legal PDF pack, version control, upload mapping and app acceptance wording.",
    version: "Version 1.1",
    effectiveDate: "29 June 2026",
    pdfPath: "/legal/00_EDD_Hub_Legal_Document_Register_and_App_Upload_Guide.pdf",
    contactEmail: "support@eddhub.co.uk",
    classification: "PUBLIC / ADMIN"
  },
  {
    title: "Driver terms and conditions",
    slug: "driver-terms",
    category: "core-terms",
    summary:
      "Terms applying to approved independent drivers using EDD Hub.",
    version: "Version 1.1",
    effectiveDate: "29 June 2026",
    pdfPath: "/legal/01_EDD_Hub_Driver_Terms_and_Conditions.pdf",
    contactEmail: "support@eddhub.co.uk",
    classification: "PUBLIC"
  },
  {
    title: "Takeaway and restaurant terms and conditions",
    slug: "takeaway-terms",
    category: "core-terms",
    summary:
      "Terms applying to approved takeaway and restaurant accounts using EDD Hub.",
    version: "Version 1.2",
    effectiveDate: "29 June 2026",
    pdfPath: "/legal/02_EDD_Hub_Takeaway_Restaurant_Terms_and_Conditions.pdf",
    contactEmail: "support@eddhub.co.uk",
    classification: "PUBLIC"
  },
  {
    title: "Privacy notice",
    slug: "privacy-notice",
    category: "privacy-data",
    summary:
      "How EDD Hub collects, uses, stores and shares personal data.",
    version: "Version 1.1",
    effectiveDate: "29 June 2026",
    pdfPath: "/legal/03_EDD_Hub_Privacy_Notice.pdf",
    contactEmail: "privacy@eddhub.co.uk",
    classification: "PUBLIC"
  },
  {
    title: "Cookie notice",
    slug: "cookie-notice",
    category: "privacy-data",
    summary:
      "Cookies, local storage and similar technologies used by EDD Hub.",
    version: "Version 1.1",
    effectiveDate: "29 June 2026",
    pdfPath: "/legal/04_EDD_Hub_Cookie_Notice.pdf",
    contactEmail: "privacy@eddhub.co.uk",
    classification: "PUBLIC"
  },
  {
    title: "Acceptable use policy",
    slug: "acceptable-use",
    category: "platform-policies",
    summary:
      "Rules for lawful, safe and honest use of the EDD Hub platform.",
    version: "Version 1.1",
    effectiveDate: "29 June 2026",
    pdfPath: "/legal/05_EDD_Hub_Acceptable_Use_Policy.pdf",
    contactEmail: "support@eddhub.co.uk",
    classification: "PUBLIC"
  },
  {
    title: "Complaints and disputes procedure",
    slug: "complaints-and-disputes",
    category: "platform-policies",
    summary:
      "How drivers and takeaways can raise complaints, disputes and support issues.",
    version: "Version 1.1",
    effectiveDate: "29 June 2026",
    pdfPath: "/legal/06_EDD_Hub_Complaints_and_Disputes_Procedure.pdf",
    contactEmail: "support@eddhub.co.uk",
    classification: "PUBLIC"
  },
  {
    title: "Data rights and deletion request policy",
    slug: "data-rights",
    category: "privacy-data",
    summary:
      "How people can exercise data protection rights and request deletion where applicable.",
    version: "Version 1.1",
    effectiveDate: "29 June 2026",
    pdfPath: "/legal/07_EDD_Hub_Data_Rights_and_Deletion_Request_Policy.pdf",
    contactEmail: "privacy@eddhub.co.uk",
    classification: "PUBLIC"
  },
  {
    title: "Driver onboarding declaration",
    slug: "driver-onboarding-declaration",
    category: "onboarding-declarations",
    summary:
      "Driver declaration text for registration, approval and account review.",
    version: "Version 1.1",
    effectiveDate: "29 June 2026",
    pdfPath: "/legal/08_EDD_Hub_Driver_Onboarding_Declaration.pdf",
    contactEmail: "support@eddhub.co.uk",
    classification: "PUBLIC"
  },
  {
    title: "Takeaway onboarding declaration",
    slug: "takeaway-onboarding-declaration",
    category: "onboarding-declarations",
    summary:
      "Takeaway declaration text for registration, approval and account review.",
    version: "Version 1.1",
    effectiveDate: "29 June 2026",
    pdfPath: "/legal/09_EDD_Hub_Takeaway_Onboarding_Declaration.pdf",
    contactEmail: "support@eddhub.co.uk",
    classification: "PUBLIC"
  },
  {
    title: "Slip photo and customer data handling policy",
    slug: "slip-photo-policy",
    category: "privacy-data",
    summary:
      "Rules for delivery slips, customer and order data, and visibility in EDD Hub.",
    version: "Version 1.1",
    effectiveDate: "29 June 2026",
    pdfPath: "/legal/10_EDD_Hub_Slip_Photo_and_Customer_Data_Handling_Policy.pdf",
    contactEmail: "privacy@eddhub.co.uk",
    classification: "PUBLIC"
  },
  {
    title: "Payment, billing and invoicing policy",
    slug: "payment-billing-invoicing",
    category: "platform-policies",
    summary:
      "Platform fees, pricing plans, invoice cycle and manual payment rules.",
    version: "Version 1.1",
    effectiveDate: "29 June 2026",
    pdfPath: "/legal/11_EDD_Hub_Payment_Billing_and_Invoicing_Policy.pdf",
    contactEmail: "billing@eddhub.co.uk",
    classification: "PUBLIC"
  },
  {
    title: "Driver safety and conduct policy",
    slug: "driver-safety-conduct",
    category: "platform-policies",
    summary:
      "Safety, vehicle, conduct and delivery standards for drivers using EDD Hub.",
    version: "Version 1.1",
    effectiveDate: "29 June 2026",
    pdfPath: "/legal/12_EDD_Hub_Driver_Safety_and_Conduct_Policy.pdf",
    contactEmail: "support@eddhub.co.uk",
    classification: "PUBLIC"
  }
] as const;

export const legalGroups = [
  {
    id: "core-terms",
    title: "Core terms",
    intro: "Terms for drivers, takeaways and restaurants using EDD Hub."
  },
  {
    id: "privacy-data",
    title: "Privacy and data",
    intro: "Privacy, cookies, data rights and customer-data handling documents."
  },
  {
    id: "platform-policies",
    title: "Platform policies",
    intro: "Policies for platform use, disputes, billing, safety and conduct."
  },
  {
    id: "onboarding-declarations",
    title: "Onboarding declarations",
    intro: "Declaration wording used during driver and takeaway onboarding."
  },
  {
    id: "reference",
    title: "Reference",
    intro: "Public register and upload mapping for the current legal pack."
  }
] as const;

export const coreLegalSlugs = [
  "privacy-notice",
  "cookie-notice",
  "driver-terms",
  "takeaway-terms"
] as const;

export type LegalDocument = (typeof legalDocuments)[number];
export type LegalSlug = LegalDocument["slug"];

export function getLegalDocument(slug: LegalSlug) {
  return legalDocuments.find((document) => document.slug === slug)!;
}
