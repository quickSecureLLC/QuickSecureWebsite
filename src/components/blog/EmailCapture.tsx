"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-white/10 bg-surface-raised p-6">
        <p className="text-[15px] font-medium text-white">Thanks for subscribing!</p>
        <p className="mt-1 text-[13px] text-white/50">
          You&apos;ll receive our latest school safety insights.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-surface-raised p-6">
      <h3 className="text-[15px] font-medium text-white">
        Stay Updated on School Safety
      </h3>
      <p className="mt-1 text-[13px] leading-[1.5] text-white/50">
        Get the latest insights on K-12 safety, emergency preparedness, and campus operations.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-1 rounded-lg border border-white/10 bg-navy px-3 py-2 text-[14px] text-white placeholder-white/30 outline-none transition-colors focus:border-white/20"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-lg bg-yellow px-4 py-2 text-[14px] font-medium text-navy transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-[13px] text-red-400">{errorMsg}</p>
      )}
    </div>
  );
}
