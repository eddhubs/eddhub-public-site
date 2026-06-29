export const legalDocuments = [
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
    intro: "Privacy and cookie documents for website visitors and EDD Hub users."
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
