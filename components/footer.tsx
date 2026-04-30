const columns = [
  {
    heading: "Platform",
    links: [
      { label: "Explore Projects", href: "#explore" },
      { label: "For Maintainers", href: "#maintainers" },
      { label: "For Supporters", href: "#supporters" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Discord", href: "#discord" },
      { label: "GitHub", href: "https://github.com/jlkdevelop/opensourcefoundation" },
      { label: "Newsletter", href: "#newsletter" },
    ],
  },
  {
    heading: "Organization",
    links: [
      { label: "About", href: "#about" },
      { label: "Mission", href: "#mission" },
      { label: "Careers", href: "#careers" },
      { label: "Press", href: "#press" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of Service", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "License", href: "#license" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: wordmark + tagline */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-14 pb-14 border-b border-white/10">
          <div className="max-w-sm">
            <a
              href="/"
              className="flex items-center mb-4"
              aria-label="Open Source Foundation home"
            >
              <img
                src="/logo.png"
                alt="Open Source Foundation"
                width={1308}
                height={401}
                className="h-10 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-white/40 text-sm leading-relaxed">
              Connecting the people who build open-source software with the
              supporters who want it to thrive.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">
                  {col.heading}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/40 text-sm hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-sm">
          <p>&copy; 2026 Open Source Foundation. All rights reserved.</p>
          <p>
            Built with open source, for open source.{" "}
            <a
              href="https://github.com/jlkdevelop/opensourcefoundation"
              className="text-white/50 hover:text-white transition-colors"
            >
              Source on GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
