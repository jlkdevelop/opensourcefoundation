import GitHubSignInButton from "./github-signin-button";
export default function FinalCta() {
  return (
    <section className="py-24 bg-[#028537]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#1A1A1A] mb-6 leading-tight">
          Ready to fund the future of open source?
        </h2>
        <p className="text-xl text-[#1A1A1A]/60 mb-10 max-w-xl mx-auto font-medium">
          Join thousands of developers already building a sustainable open-source
          ecosystem — one contribution at a time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GitHubSignInButton size="lg" />
          <a
            href="#explore"
            className="flex items-center justify-center gap-2 border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold px-8 py-4 rounded-full hover:bg-[#019B3F] transition-colors text-lg"
          >
            Explore Projects <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
