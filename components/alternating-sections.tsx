import Image from "next/image";

const sections = [
  {
    tag: "For Maintainers",
    heading: "Earn from the work you already do",
    body: "Turn your open-source contributions into a sustainable income stream. Set a funding goal, accept one-time tips or monthly sponsorships, and get paid directly.",
    cta: { label: "Submit your project", href: "#submit" },
    illustration: "/illustrations/stacking.svg",
    imageAlt: "Stacked coins representing earnings",
    flip: false,
  },
  {
    tag: "Your Profile",
    heading: "A profile that shows your impact",
    body: "Your project page shows stars, contributors, download stats, and funding progress — everything a potential supporter needs to decide in seconds.",
    cta: { label: "See example profiles", href: "#explore" },
    illustration: "/illustrations/profile-dashboard.svg",
    imageAlt: "Project profile dashboard",
    flip: true,
  },
  {
    tag: "Community",
    heading: "Connect with 8,500+ developers",
    body: "Discover kindred projects, collaborate on shared dependencies, and build relationships with the developers whose work intersects with yours.",
    cta: { label: "Explore the community", href: "#community" },
    illustration: "/illustrations/community.svg",
    imageAlt: "Developer network illustration",
    flip: false,
  },
  {
    tag: "For Supporters",
    heading: "Fund what the internet runs on",
    body: "Find the projects behind your favourite tools and contribute monthly or with a one-time tip. See exactly how your money supports real maintainers.",
    cta: { label: "Browse projects", href: "#explore" },
    illustration: "/illustrations/plant.svg",
    imageAlt: "Growing plant funded by contributions",
    flip: true,
  },
];

export default function AlternatingSections() {
  return (
    <section id="maintainers" className="bg-[#FAFAFA]">
      {sections.map((s, i) => (
        <div
          key={s.tag}
          className={`py-20 ${i % 2 === 0 ? "bg-[#FAFAFA]" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                s.flip ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
              }`}
            >
              {/* Copy side */}
              <div>
                <div className="inline-block bg-[#1A1A1A] text-[#5BD478] text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {s.tag}
                </div>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1A1A1A] mb-5 leading-tight">
                  {s.heading}
                </h2>
                <p className="text-lg text-[#1A1A1A]/60 leading-relaxed mb-8 max-w-lg">
                  {s.body}
                </p>
                <a
                  href={s.cta.href}
                  className="inline-flex items-center gap-2 bg-[#028537] text-white font-bold px-6 py-3.5 rounded-full hover:bg-[#019B3F] transition-colors"
                >
                  {s.cta.label} <span aria-hidden>→</span>
                </a>
              </div>

              {/* Illustration side */}
              <div className="flex justify-center">
                <Image
                  src={s.illustration}
                  alt={s.imageAlt}
                  width={400}
                  height={320}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
