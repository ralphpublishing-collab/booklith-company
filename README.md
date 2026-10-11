# Booklith

The website for **Booklith**, a book marketing, author branding, and publishing support company (booklith.name.ng).

It is a 14-page site. It has its own pages for each service, a portfolio with filters and video, a team page, testimonials, and a contact form that sends inquiries through Netlify Forms.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Booklith |
| `/services` | Services overview |
| `/author-marketing` | Book Marketing |
| `/author-branding` | Author Branding |
| `/creative-campaigns` | Creative Campaigns |
| `/publishing-support` | Publishing Support |
| `/author-outreach` | Author Outreach |
| `/our-team` | Our Team |
| `/our-approach` | Our Approach |
| `/our-work` | Portfolio (filters, image lightbox, video) |
| `/testimonials` | Testimonials |
| `/for-authors` | For Authors |
| `/contact` | Contact form |

There are also two utility pages: `/thank-you` (shown when the form is submitted without JavaScript) and a custom 404.

## Technology

- **Astro 5**, built as static output. Every route is a real HTML file, so opening a page directly or refreshing it works without SPA redirects.
- **Netlify Forms** handles the contact form, with a honeypot field for spam protection.
- **Netlify Image CDN** (`/.netlify/images`) serves resized WebP versions of the images.
- **@astrojs/sitemap** generates the sitemap. `public/robots.txt` points to it.
- Fonts are self-hosted with Fontsource: Cormorant Garamond for headlines, Manrope for body text.

## Running locally

```bash
npm install
netlify dev      # recommended: emulates Forms and the Image CDN
# or
npm run dev      # plain Astro dev server (images via /.netlify/images won't resolve)
```

## Deployment

`netlify.toml` builds with `npm run build` and publishes `dist/`.

To use the custom domain, add `booklith.name.ng` under **Domain management** in Netlify and point DNS at Netlify. Canonical URLs, the sitemap, and Open Graph tags already use `https://booklith.name.ng`.

To get inquiries by email, turn on form notifications under **Project configuration → Notifications → Form submission notifications**.

## Media

- `public/img/brand`: the supplied logo, plus a favicon and share image made from it. The logo artwork itself is unchanged.
- `public/img/team`: the founder's three photos and the four team portraits.
- `public/img/work`: the portfolio images and the video poster frames.
- `public/video`: the three supplied portfolio videos. They were remuxed for fast start, without re-encoding.
