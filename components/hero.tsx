import Image from "next/image";

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
            "radial-gradient(ellipse at 80% 30%, #F6FF52 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#F6FF52] text-xs font-bold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#F6FF52] rounded-full" />
              Now live — fund what you depend on
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.0] text-[#1A1A1A] mb-6">
              Fund the future of{" "}
              <span className="relative inline-block">
                <span className="relative z-10">open source</span>
                <span
                  className="absolute inset-x-0 bottom-1 h-4 bg-[#F6FF52] z-0"
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
              <a
                href="#signin"
                className="flex items-center justify-center gap-2 bg-[#1A1A1A] text-white font-bold px-6 py-3.5 rounded-full hover:bg-[#333] transition-colors"
              >
                <GitHubIcon />
                Sign in with GitHub
              </a>
              <a
                href="#explore"
                className="flex items-center justify-center gap-2 border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold px-6 py-3.5 rounded-full hover:bg-[#1A1A1A] hover:text-white transition-colors"
              >
                Explore Projects <span aria-hidden>→</span>
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["A", "B", "C", "D"].map((l) => (
                  <div
                    key={l}
                    className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#F6FF52] flex items-center justify-center text-xs font-bold border-2 border-[#FAFAFA]"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#1A1A1A]/60 font-medium">
                Join <span className="font-bold text-[#1A1A1A]">8,500+</span>{" "}
                developers already on the platform
              </p>
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

function GitHubIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}
