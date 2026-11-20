"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone") || "-"}`,
      `Email: ${f.get("email")}`,
      `Property type: ${f.get("type")}`,
      "",
      String(f.get("message") || ""),
    ].join("\n");
    const subject = encodeURIComponent("Security consultation request");
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-1.5 w-full rounded-lg border border-white/15 bg-navy-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-200">
          Name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-medium text-slate-200">
          Phone
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
      </div>
      <label className="block text-sm font-medium text-slate-200">
        Email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block text-sm font-medium text-slate-200">
        Property type
        <select name="type" className={field} defaultValue="Commercial">
          <option>Commercial</option>
          <option>Residential / apartment community</option>
          <option>Private sector</option>
          <option>Government</option>
          <option>Event</option>
        </select>
      </label>
      <label className="block text-sm font-medium text-slate-200">
        How can we help?
        <textarea name="message" rows={5} required placeholder="Tell us about your property and what you need." className={field} />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-gold px-6 py-3.5 font-semibold text-navy-950 transition hover:bg-gold-light sm:w-auto"
      >
        Send message
      </button>
      {sent && (
        <p role="status" className="text-sm text-slate-400">
          Your email app should have opened with the message ready to send. If not, call us at {SITE.phones.office.display}.
        </p>
      )}
    </form>
  );
}
