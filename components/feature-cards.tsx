const features = [
  {
    icon: "◈",
    title: "Showcase",
    description:
      "Create a beautiful project profile that highlights your work, contributors, and impact. Let the world see what you've built.",
    accent: "#5BD478",
  },
  {
    icon: "◎",
    title: "Discover",
    description:
      "Browse thousands of open-source projects across every domain. Find tools you rely on and the teams behind them.",
    accent: "#C5C8FF",
  },
  {
    icon: "◆",
    title: "Support",
    description:
      "Fund maintainers with one-time tips or recurring monthly sponsorships. Every contribution keeps critical software alive.",
    accent: "#5BD478",
  },
  {
    icon: "◉",
    title: "Fundraise",
    description:
      "Set funding goals, share progress, and build a sustainable income stream for your project. Payouts go directly to you.",
    accent: "#C5C8FF",
  },
];

export default function FeatureCards() {
  return (
    <section id="explore" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1A1A1A] mb-4">
            Everything open source needs
          </h2>
          <p className="text-lg text-[#1A1A1A]/60 max-w-xl mx-auto">
            One platform for maintainers and supporters to connect, collaborate,
            and keep great software alive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#111111] rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold"
                style={{ background: f.accent, color: "#111" }}
              >
                {f.icon}
              </div>
              <h3 className="text-white text-xl font-bold">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {f.description}
              </p>
              <a
                href="#"
                className="mt-auto text-sm font-semibold flex items-center gap-1"
                style={{ color: f.accent }}
              >
                Learn more <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
