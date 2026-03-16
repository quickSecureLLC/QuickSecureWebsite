const BASE_URL = "https://quicksecure.us";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "QuickSecure",
    url: BASE_URL,
    logo: `${BASE_URL}/brand/Horizontal-quicksecure-logo.svg`,
    description:
      "QuickSecure is a unified K-12 school safety platform combining emergency response, daily operations, hardware, and integrations into one system.",
    sameAs: ["https://www.linkedin.com/company/quicksecurellc"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: `${BASE_URL}/contact`,
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "QuickSecure",
    url: BASE_URL,
    publisher: { "@id": `${BASE_URL}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(
  questions: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function blogPostingSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
  wordCount?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    ...(opts.image && { image: opts.image }),
    ...(opts.keywords?.length && { keywords: opts.keywords.join(", ") }),
    ...(opts.wordCount && { wordCount: opts.wordCount }),
    author: {
      "@type": "Organization",
      name: "QuickSecure Safety Team",
      url: BASE_URL,
    },
    publisher: { "@id": `${BASE_URL}/#organization` },
  };
}

export function softwareApplicationSchema(opts: {
  name: string;
  description: string;
  url: string;
  category: string;
  operatingSystem?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    applicationCategory: opts.category,
    ...(opts.operatingSystem && { operatingSystem: opts.operatingSystem }),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      url: `${BASE_URL}/contact`,
      description: "Contact for pricing",
    },
    publisher: { "@id": `${BASE_URL}/#organization` },
  };
}
