export const site = {
  name: "EDD Hub",
  longName: "Emergency Delivery Driver Hub",
  domain: "https://www.eddhub.co.uk",
  appUrl: "https://eddhub.app",
  loginUrl: "https://eddhub.app/login",
  email: "info@eddhub.co.uk",
  location: "Perth, Scotland",
  description:
    "EDD Hub helps local takeaways access overflow delivery support from approved independent drivers."
};

export const seo = {
  home: {
    title: "EDD Hub | Overflow delivery support for takeaways",
    description:
      "EDD Hub connects takeaways needing short-notice delivery support with approved independent drivers in their local area.",
    path: "/"
  },
  takeaways: {
    title: "For takeaways | EDD Hub overflow delivery support",
    description:
      "Delivery backup for busy takeaway nights. Send single or bundled runs to approved local independent drivers when your own drivers are stretched.",
    path: "/for-takeaways"
  },
  drivers: {
    title: "Drive with EDD Hub | Local delivery opportunities",
    description:
      "Approved independent drivers can review local delivery runs, see key run details, and choose whether to accept.",
    path: "/for-drivers"
  },
  howItWorks: {
    title: "How EDD Hub works | Takeaway delivery coordination",
    description:
      "See how EDD Hub helps takeaways send delivery runs to approved local drivers and follow progress clearly.",
    path: "/how-it-works"
  },
  pricing: {
    title: "Pricing | EDD Hub overflow delivery support",
    description:
      "Learn how EDD Hub separates takeaway platform fees from driver payments for overflow delivery support.",
    path: "/pricing"
  },
  locations: {
    title: "EDD Hub locations | Local overflow delivery rollout",
    description:
      "EDD Hub is starting locally and building waiting lists for future rollout areas. Register interest for your town or city.",
    path: "/locations"
  },
  perth: {
    title: "Perth takeaway delivery support | EDD Hub",
    description:
      "Overflow delivery support for Perth takeaways. Register interest as a takeaway or independent driver for the Perth rollout.",
    path: "/locations/perth"
  },
  dundee: {
    title: "Dundee delivery support waiting list | EDD Hub",
    description:
      "Join the Dundee waiting list for future EDD Hub overflow delivery support for takeaways and independent drivers.",
    path: "/locations/dundee"
  },
  fife: {
    title: "Fife delivery support waiting list | EDD Hub",
    description:
      "Join the Fife waiting list for future EDD Hub overflow delivery support for takeaways and independent drivers.",
    path: "/locations/fife"
  },
  about: {
    title: "About EDD Hub | Why EDD Hub exists",
    description:
      "EDD Hub was created to help local takeaway operations handle delivery pressure without becoming a customer marketplace.",
    path: "/about"
  },
  safety: {
    title: "Safety and trust | EDD Hub",
    description:
      "Learn how EDD Hub supports clearer delivery coordination with driver review, job references, status timelines, and issue reporting.",
    path: "/safety-and-trust"
  },
  faqs: {
    title: "FAQs | EDD Hub",
    description:
      "Answers for takeaways and independent drivers about EDD Hub, overflow delivery support, availability, driver approval, and pricing.",
    path: "/faqs"
  },
  contact: {
    title: "Contact EDD Hub",
    description:
      "Contact EDD Hub to register takeaway interest, apply as an independent driver, or ask about local rollout plans.",
    path: "/contact"
  },
  legal: {
    title: "Legal | EDD Hub",
    description: "Legal notices and terms for EDD Hub visitors, takeaways, and independent drivers.",
    path: "/legal"
  }
} as const;

export function canonicalUrl(path: string) {
  return new URL(path, site.domain).toString();
}
