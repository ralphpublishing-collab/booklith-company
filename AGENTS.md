# AGENTS.md — Booklith website

## Architecture
- Static **Astro 5** site (`output: 'static'`, `build.format: 'file'`, `trailingSlash: 'never'`). Each page in `src/pages/*.astro` becomes `/<name>.html`, which Netlify serves at `/<name>`.
- `src/layouts/Base.astro` holds the shared shell: SEO meta, canonical URL, Open Graph tags, Organization JSON-LD, header, footer, and the reveal-on-scroll script.
- `src/data/site.ts` is the **single source of content**: brand info, nav, services, team, portfolio projects, approach stages, and testimonials. It also has the `cdn()` helper for Netlify Image CDN URLs. Edit content here rather than in the pages.
- Components (`src/components`):
  - `Header` / `Footer`
  - `PageHero` (eyebrow, h1 with optional `<em>`, breadcrumb)
  - `CtaBand`
  - `Img` (responsive srcset through the Image CDN)
  - `VideoPlayer` (`preload="none"`, poster, error fallback)
  - `ProjectMedia` (a portfolio project's image and video grid)
  - `ServicePage` (shared shell for the five service pages; each page passes its own pillars and examples, and adds a unique section through the slot)
- All styles live in `src/styles/global.css`, built on design tokens in `:root`. A page that needs its own styles uses an `<style is:global>` block with page-prefixed class names.

## Conventions and decisions
- **Content accuracy rules from the client.** Never invent client names, results, metrics, credentials, biographies, star ratings, or social handles. Never promise sales, bestseller status, placements, or media coverage. Booklith is *not* a publisher.
- **Founder photos.** Rapheal Adebayo has three photos and must always read as one person. Each photo is used once: `rapheal-adebayo-home.jpg` on Home, `-about.jpg` on About, `-profile.jpg` on Our Team.
- **Portfolio grouping.** It follows what the supplied files actually show, which differs from the original 7 pictures + 5 videos brief. The client confirmed this grouping. Only three videos were supplied:
  1. Lions of the Great Rift: 2 images
  2. Whispers of the Niger Dawn: 2 images
  3. Beyond the Rainbow Bridge: 2 images + 1 video
  4. Client Project 4: 1 image + 1 video
  5. Client Project 5: 2 images + 1 video

  Book titles and author names were approved for display. Projects 4 and 5 have no supplied names, so they keep neutral labels.
- **Portfolio images.** They use `object-fit: contain` at their native aspect ratio, so artwork is never cropped. The `.layout-a`…`.layout-e` column ratios keep paired images at equal heights.
- **Logo.** It is black on transparent. On dark backgrounds it sits on an ivory `.logo-plate`; never recolor it.
- **Gold.** Use `--gold-text` for small text on light backgrounds (for contrast) and `--gold-light` on dark backgrounds. Plain `--gold` is for decoration only.
- **Contact form.** It is a static HTML Netlify form (`name="contact"`), submitted by AJAX to `/` in `src/scripts/contact-form.ts`. Success is shown only after a 2xx response. Drafts are kept in sessionStorage. `?service=<slug>` preselects the service. Without JavaScript, the form posts normally and lands on `/thank-you`.
- **Testimonials** are published with the client's confirmation that they are authentic and approved.
