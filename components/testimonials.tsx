const testimonials = [
  {
    quote:
      "I've maintained my library for six years without a cent. Within three months on OSF I had 40 sponsors covering my hosting costs and then some.",
    name: "Alex R.",
    role: "Maintainer of a popular CLI toolkit",
    initials: "AR",
    accent: "#5BD478",
  },
  {
    quote:
      "Finally a place that feels built for developers, not marketers. The project pages are clean and the funding flow took me under five minutes to set up.",
    name: "Morgan L.",
    role: "Core contributor, web framework",
    initials: "ML",
    accent: "#C5C8FF",
  },
  {
    quote:
      "I had no idea how many of my daily tools were maintained by single developers. OSF made it easy to find them and actually send money.",
    name: "Sam K.",
    role: "Senior engineer, financial services",
    initials: "SK",
    accent: "#5BD478",
  },
  {
    quote:
      "Our company now funds 12 open-source projects through OSF. It's the cleanest way to give back without a procurement headache.",
    name: "Jordan P.",
    role: "Engineering manager, SaaS startup",
    initials: "JP",
    accent: "#C5C8FF",
  },
  {
    quote:
      "Getting my first supporter notification felt surreal. Three years of commits and finally someone said 'this matters, here's money'.",
    name: "Taylor M.",
    role: "Open-source data tooling author",
    initials: "TM",
    accent: "#5BD478",
  },
  {
    quote:
      "The discovery is excellent. I found three libraries I depend on every day that I had no idea accepted funding. Fixed that immediately.",
    name: "Casey B.",
    role: "Freelance full-stack developer",
    initials: "CB",
    accent: "#C5C8FF",
  },
];

export default function Testimonials() {
  return (
    <section id="community" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Developers love OSF
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Maintainers, contributors, and supporters who have already made the
            move.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.initials}
              className="bg-[#1A1A1A] rounded-2xl p-6 flex flex-col gap-4"
            >
              <p className="text-white/70 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                  style={{ background: t.accent, color: "#111" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {t.name}
                  </div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
