# M'Project landing page — developer handoff

This package contains two matching implementations of the approved M'Project marketing landing page: a standalone HTML version and a reusable React JSX component. Both use the same responsive CSS and original M'Project icon.

## Package contents

| File | Purpose |
|---|---|
| `mproject-landing.html` | Complete standalone landing page with a small inline script for the mobile navigation. |
| `mproject-landing.css` | Shared responsive styling, scoped under `.mp-site` to reduce collisions with an existing application. |
| `MProjectLanding.jsx` | React component with all page content, the mobile menu state and a configurable workspace CTA. |
| `M_Project-3.png` | Original M'Project brand icon used throughout the page. |
| `MProject_Landing_Page_Review.pdf` | Approved visual/content reference for design review and implementation QA. |

## Standalone HTML setup

1. Keep `mproject-landing.html`, `mproject-landing.css` and `M_Project-3.png` in the same public directory.
2. Open `mproject-landing.html` directly or serve the directory with any static web server.
3. Replace the placeholder `mailto:hello@example.com` CTA near the end of the HTML with the real workspace, demo or contact URL.
4. Add production analytics, cookie consent, SEO/social metadata and form handling according to the host application's requirements.

## React setup

Copy these files into the same component directory:

- `MProjectLanding.jsx`
- `mproject-landing.css`

Then render the component:

```jsx
import MProjectLanding from "./MProjectLanding";

export default function App() {
  return <MProjectLanding workspaceHref="/workspace" />;
}
```

The JSX has no UI-library dependency; it only requires React. The `workspaceHref` prop controls the main CTA destination and defaults to `#contact`.

### Logo handling in React

The component currently uses `src="./M_Project-3.png"`. Choose the convention used by the target build:

- Public directory: place the image in `public/` and change the references to `/M_Project-3.png`.
- Module import: place the image beside the component, add `import mProjectLogo from "./M_Project-3.png";`, and replace the string sources with `src={mProjectLogo}`.

## Design system

- Primary red: `#ef2f2f`
- Deep red: `#d71920`
- Main ink: `#111318`
- Dark section: `#15171b`
- Muted copy: `#657083`
- Canvas: `#f7f9fc`
- Accent colours: i-ERP violet `#6b4ec4`, M'Trade blue `#167b91`, ESG green `#579b43`
- Desktop container: maximum `1440px`
- Responsive breakpoints: `1180px` and `760px`

The CSS uses system fonts for performance and does not require an external font request. If the production brand system includes a licensed typeface, replace the `.mp-site` font stack centrally.

## Content and product boundaries

The landing page presents:

- A flexible project-management core for creating and managing any initiative.
- Pre-installed intelligent i-ERP setting and management.
- Pre-installed M'Trade management and trade-finance readiness workflows.
- Pre-installed ESG and SDG action planning, monitoring and performance evidence.

M'Trade is positioned as a preparation, coordination and monitoring workflow. Banks and other authorised institutions retain KYC/AML review, compliance assessment, credit decisions, pricing, approval and the provision of finance. Keep that governance statement in the final build.

## Accessibility and implementation notes

- Semantic landmarks, heading order, image alternatives and navigation labels are included.
- Keyboard focus styles and `prefers-reduced-motion` support are included.
- The page is responsive for desktop, tablet and mobile layouts.
- Page anchors are already connected to their sections.
- Dashboard values and SDG examples are illustrative marketing content, not live product data.
- The handoff is front-end only: connect CTAs, authentication, analytics, CMS content and backend workflows during implementation.

## Acceptance checklist

- Confirm every CTA points to the correct production route.
- Confirm brand and legal teams approve the final copy and governance statements.
- Test Chrome, Safari, Firefox and Edge at desktop and mobile widths.
- Run Lighthouse and address any host-application performance or accessibility findings.
- Compare the final implementation with `MProject_Landing_Page_Review.pdf` for hierarchy, spacing, colour and message consistency.
