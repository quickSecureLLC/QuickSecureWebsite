import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quicksecure.com";

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/our-story`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/careers`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/legal`, lastModified: new Date(), priority: 0.3 },
    { url: `${baseUrl}/product/emergency-response`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/product/campus-monitoring`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/product/tip-line`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/product/drill-management`, lastModified: new Date(), priority: 0.8 },
  ];
}
