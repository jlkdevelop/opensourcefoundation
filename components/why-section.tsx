import Image from "next/image";

const reasons = [
  {
    heading: "The infrastructure is free — the maintenance is not",
    body: "Open-source powers 90% of the modern web. Every startup, enterprise, and government runs on it. Yet most maintainers work nights and weekends, unpaid.",
  },
  {
    heading: "Funding directly reduces burnout",
    body: "Financial support lets maintainers dedicate real time to their projects — fixing bugs faster, shipping security patches, and responding to issues.",
  },
  {
    heading: "Healthy projects mean a healthier internet",
    body: "Abandoned packages create security vulnerabilities. Funded maintainers mean the tools you depend on keep getting better, not becoming liabilities.",
  },
];

export default function WhySection() {
  return (
    <section id="how-it-works" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#5BD478] mb-8 leading-tight">
              Why fund open source?
            </h2>

            <div className="flex flex-col gap-8">
              {reasons.map((r, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#028537] text-white font-black text-sm flex items-center justify-center mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">
                      {r.heading}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {r.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#explore"
              className="mt-10 inline-flex items-center gap-2 bg-[#028537] text-white font-bold px-6 py-3.5 rounded-full hover:bg-[#019B3F] transition-colors"
            >
              Explore funded projects <span aria-hidden>→</span>
            </a>
          </div>

          {/* Right: illustration */}
          <div className="flex justify-center">
            <Image
              src="/illustrations/why-graph.svg"
              alt="Open source funding growth chart"
              width={420}
              height={340}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
