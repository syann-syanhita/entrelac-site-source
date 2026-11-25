"use client";

import React, { useState } from "react";
import type { Dictionary } from "@/dictionaries/get-dictionary";

interface NewsletterFormProps {
  dict: Dictionary;
}

export default function NewsletterForm({ dict }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Temporary simulation / Under construction
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-200 text-sm flex items-center gap-3">
        <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <p>{dict.common.email_success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-2">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={dict.common.email_placeholder}
          required
          className="flex-1 px-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition shadow-lg shadow-sky-950 flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          ) : (
            dict.common.subscribe
          )}
        </button>
      </div>
      <p className="text-[11px] text-slate-400 italic">
        {dict.common.email_disclaimer}
      </p>
    </form>
  );
}
