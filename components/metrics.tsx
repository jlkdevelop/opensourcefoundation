const stats = [
  { value: "1,200+", label: "Projects" },
  { value: "8,500+", label: "Developers" },
  { value: "15,000+", label: "Repositories" },
  { value: "$2.4M+", label: "Raised" },
];

export default function Metrics() {
  return (
    <section className="py-16 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[#99FCA5]/10 border border-[#99FCA5]/20 rounded-2xl px-6 py-8 text-center"
            >
              <div className="text-4xl sm:text-5xl font-black text-[#99FCA5] mb-2">
                {s.value}
              </div>
              <div className="text-sm font-semibold text-white/60 uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
