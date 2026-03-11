const columns = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "/" },
      { label: "Modules", href: "/#features" },
      { label: "Solutions", href: "/#use-cases" },
    ],
  },
  {
    title: "Company",
    links: [
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
      { label: "Our Story", href: "/our-story" },
      { label: "Request Demo", href: "/contact" },
      {
        label: "Trust Center",
        href: "https://trust.delve.co/quicksecure",
        external: true,
      },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "X", href: "https://x.com/quicksecure", external: true },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/quicksecure",
        external: true,
      },
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
      <ul className="flex flex-col gap-[8px]">
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
    <footer className="bg-[#070B16] text-white">
      <div className="px-8 pt-[58px] pb-[45px] sm:px-16 sm:pt-[72px] md:px-[120px]">
        <div className="flex flex-col items-start gap-[79.5px]">
          {/* Link columns */}
          <div className="flex w-full flex-wrap gap-y-[40px] justify-between">
            {columns.map((column) => (
              <FooterColumn
                key={column.title}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>

          {/* Footer bottom */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-[16px]">
            <span className="text-[14px] leading-[21px] text-white">
              &copy; 2026 QuickSecure
            </span>
            <div className="flex items-center gap-[6px] text-[14px] leading-[21px] text-white">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
