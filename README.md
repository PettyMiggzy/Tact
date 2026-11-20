# Superior Tactical Response — website

Next.js 16 (App Router) + Tailwind CSS 4. Rebuild of thetacticalresponse.com.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

- `lib/site.ts` — phone numbers, address, services, training modules, testimonials, credential captions
- `app/` — pages: `/`, `/training`, `/credentials`, `/contact`
- `public/images/` — optimized site images
- `components/ContactForm.tsx` — currently opens the visitor's email app (mailto). Swap for a server action + email provider (e.g. Resend) when ready.
