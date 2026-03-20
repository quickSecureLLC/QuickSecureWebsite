const columns = [
  {
    title: "Platform",
    links: [
      { label: "Products", href: "/#products" },
      { label: "Solutions", href: "/#use-cases" },
      { label: "Modules", href: "/#features" },
      { label: "Security", href: "/#security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/our-story" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/legal#terms-of-service" },
      { label: "Data Use", href: "/legal#data-use-policy" },
      { label: "Security", href: "/legal#security" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Home", href: "/" },
      { label: "Request Demo", href: "/contact" },
    ],
  },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div className="min-w-[100px]">
      <h3 className="mb-5 text-[14px] leading-[14px] text-white/60">{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[14px] leading-[21px] text-white transition-opacity hover:opacity-70"
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="px-8 pt-14 pb-11 sm:px-16 sm:pt-18 md:px-30">
        <div className="flex flex-col items-start gap-20">
          {/* Link columns */}
          <div className="flex w-full flex-wrap gap-y-10 justify-between">
            {columns.map((column) => (
              <FooterColumn
                key={column.title}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>

          {/* Footer bottom */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-4">
            <span className="text-[14px] leading-[21px] text-white">
              &copy; 2026 QuickSecure
            </span>
            <div className="flex items-center gap-1.5 text-[14px] leading-[21px] text-white">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm3.1 5.3l-3.6 3.6a.5.5 0 01-.7 0l-1.8-1.8a.5.5 0 11.7-.7L7.3 9l3.2-3.2a.5.5 0 01.7.7z"
                  fill="currentColor"
                />
              </svg>
              FERPA Aligned
            </div>
            <a
              href="https://www.linkedin.com/company/quicksecure-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-opacity hover:opacity-70"
              aria-label="LinkedIn"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
