import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-20 lg:pt-24 pb-8 lg:pb-10 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 30%, #028537 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#5BD478] text-xs font-bold px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 bg-[#028537] rounded-full" />
              Now live — fund what you depend on
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#1A1A1A] mb-5">
              Fund the future of{" "}
              <span className="relative inline-block">
                <span className="relative z-10">open source</span>
                <span
                  className="absolute inset-x-0 bottom-1 h-4 bg-[#028537] z-0"
                  aria-hidden
                />
              </span>{" "}
              software
            </h1>

            <p className="text-base sm:text-lg text-[#1A1A1A]/60 font-medium leading-relaxed max-w-xl">
              Connect supporters with the maintainers behind the tools the world
              depends on. Showcase your project, attract funding, and keep open
              source thriving.
            </p>
          </div>

          {/* Right: illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/illustrations/hero.svg"
                alt="Open source project network illustration"
                width={520}
                height={420}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
