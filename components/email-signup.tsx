"use client";
import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-20 bg-[#FAFAFA] border-y border-black/10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1A1A1A] mb-4">
          Stay in the loop
        </h2>
        <p className="text-[#1A1A1A]/60 mb-8 text-lg">
          Get updates on newly funded projects, platform features, and OSS news.
          No spam. Unsubscribe anytime.
        </p>

        {status === "done" ? (
          <div className="bg-[#028537] text-white font-bold px-6 py-4 rounded-2xl inline-block">
            You&apos;re on the list — thanks!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 border-2 border-[#1A1A1A] rounded-full px-5 py-3 text-sm font-medium bg-white focus:outline-none focus:border-[#028537] transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#1A1A1A] text-[#5BD478] font-bold px-6 py-3 rounded-full text-sm hover:bg-[#333] transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe →"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-red-600 text-sm">
            Something went wrong — please try again.
          </p>
        )}
      </div>
    </section>
  );
}
