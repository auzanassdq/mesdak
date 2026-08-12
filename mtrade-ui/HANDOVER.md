# M’Trade UI — Developer Handover

## What is included

- Responsive M’Trade dashboard for desktop, tablet, and mobile
- M’Trade Passport and finance-readiness experience
- Active trade and shipment tracking
- Matched finance and insurance offers
- Document-completion alert
- Guided finance-request dialog
- Interactive navigation, filters, notifications, and feedback messages
- Branded social preview artwork

## Main implementation files

- `app/page.tsx` — React JSX interface, sample data, and interactions
- `app/globals.css` — complete visual system and responsive styling
- `app/layout.tsx` — page metadata and application shell
- `public/og.png` — M’Trade social sharing image
- `public/favicon.svg` — browser icon placeholder

Although the main component uses the `.tsx` extension, its UI structure is standard React JSX. TypeScript is used only for safer development and can be converted to `.jsx` by removing the small number of type annotations.

## Local development

Requirements:

- Node.js 22.13 or later
- npm or pnpm

Install and run:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

Production build:

```bash
npm run build
```

## Integration guidance

The current interface uses representative demonstration data. A production implementation should replace the local arrays in `app/page.tsx` with authenticated API calls for:

- MSME identity and M’World verification
- Trade Passport and readiness scoring
- Purchase orders, invoices, shipments, and document status
- Finance and insurance offers
- Controlled payment and settlement information
- Notifications and advisor messages

The finance provider must remain responsible for final credit decisions. Readiness scores and platform matches should be presented as decision-support information rather than guaranteed approvals.

## Suggested API domains

- `/api/business-profile`
- `/api/trade-passport`
- `/api/trades`
- `/api/documents`
- `/api/finance-requests`
- `/api/finance-offers`
- `/api/notifications`

## Production priorities

1. Add authenticated user and organization accounts.
2. Define roles for MSMEs, buyers, financiers, advisors, and administrators.
3. Connect document storage with malware scanning and permission controls.
4. Implement KYC, beneficial-ownership, sanctions, and transaction checks.
5. Add server-side audit trails for applications and credit decisions.
6. Connect logistics, invoice, payment, and financing providers.
7. Perform accessibility, security, privacy, and regulatory reviews.

## Design tokens

- Forest green: `#173B34`
- Primary green: `#244E44`
- Warm ivory: `#F4F1E9`
- Muted gold: `#E5AD49`
- Terracotta: `#BA674C`
- Main text: `#18342E`

## Notes

- The prototype intentionally avoids a proprietary component library so developers can migrate it to their preferred design system.
- Interactive controls currently demonstrate the intended product behavior and should be connected to backend services.
- Sample company, buyer, financial, and transaction information is fictional.
