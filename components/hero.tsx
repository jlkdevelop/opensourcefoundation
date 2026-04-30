import Image from "next/image";
import GitHubSignInButton from "./github-signin-button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 30%, #028537 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#5BD478] text-xs font-bold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#028537] rounded-full" />
              Now live — fund what you depend on
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.0] text-[#1A1A1A] mb-6">
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

            <p className="text-lg sm:text-xl text-[#1A1A1A]/60 font-medium leading-relaxed mb-10 max-w-xl">
              Connect supporters with the maintainers behind the tools the world
              depends on. Showcase your project, attract funding, and keep open
              source thriving.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <GitHubSignInButton size="lg" />
              <a
                href="#explore"
                className="flex items-center justify-center gap-2 border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold px-6 py-3.5 rounded-full hover:bg-[#1A1A1A] hover:text-white transition-colors"
              >
                Explore Projects <span aria-hidden>→</span>
              </a>
            </div>

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
