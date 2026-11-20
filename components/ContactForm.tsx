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
    "mt-2 w-full border border-white/15 bg-ink px-4 py-3.5 text-white placeholder:text-slate-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="hud block text-[10px] text-slate-400">
          Name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="hud block text-[10px] text-slate-400">
          Phone
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
      </div>
      <label className="hud block text-[10px] text-slate-400">
        Email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="hud block text-[10px] text-slate-400">
        Property type
        <select name="type" className={field} defaultValue="Commercial">
          <option>Commercial</option>
          <option>Residential / apartment community</option>
          <option>Private sector</option>
          <option>Government</option>
          <option>Event</option>
        </select>
      </label>
      <label className="hud block text-[10px] text-slate-400">
        How can we help?
        <textarea name="message" rows={5} required placeholder="Tell us about your property and what you need." className={field} />
      </label>
      <button
        type="submit"
        className="display w-full bg-gold px-8 py-4 text-xl text-ink transition [clip-path:polygon(12px_0,100%_0,calc(100%-12px)_100%,0_100%)] hover:bg-gold-light sm:w-auto"
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
