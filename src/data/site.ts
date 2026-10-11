export const site = {
  name: 'Booklith',
  domain: 'booklith.name.ng',
  url: 'https://booklith.name.ng',
  email: 'hello@booklith.name.ng',
  descriptor: 'Book Marketing • Author Branding • Publishing Support',
  defaultTitle: 'Booklith | Book Marketing, Author Branding & Publishing Support',
  defaultDescription:
    'Booklith helps authors build stronger book brands through book marketing, author branding, creative campaigns, publishing support, and author outreach.',
  logo: '/img/brand/booklith-logo.png',
}

/** Build a Netlify Image CDN URL for a file in /public. */
export function cdn(src: string, w: number, q = 78) {
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${w}&fm=webp&q=${q}`
}

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Our Approach', href: '/our-approach' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'For Authors', href: '/for-authors' },
  { label: 'Contact', href: '/contact' },
]

export type Service = {
  slug: string
  href: string
  name: string
  short: string
  overview: string
  includes: string[]
  cta: string
}

export const services: Service[] = [
  {
    slug: 'book-marketing',
    href: '/author-marketing',
    name: 'Book Marketing',
    short: 'Clear positioning, sharper messaging, and a focused plan for reaching the readers your book was written for.',
    overview:
      'We help authors clarify their book’s positioning, promotional messaging, target audience, and marketing activities — so every effort points in the same direction.',
    includes: ['Book positioning', 'Promotional messaging', 'Audience consideration', 'Campaign planning'],
    cta: 'Explore Book Marketing',
  },
  {
    slug: 'author-branding',
    href: '/author-branding',
    name: 'Author Branding',
    short: 'A consistent, professional author identity across your profiles, materials, and book communications.',
    overview:
      'We help authors develop a consistent professional identity across relevant author profiles, promotional materials, and book-related communications.',
    includes: ['Author positioning', 'Visual identity direction', 'Author profiles & bios', 'Branded materials'],
    cta: 'Explore Author Branding',
  },
  {
    slug: 'creative-campaigns',
    href: '/creative-campaigns',
    name: 'Creative Campaigns',
    short: 'Promotional graphics, launch visuals, and social creatives that bring your book into focus.',
    overview:
      'We support the visual presentation of books and authors through promotional graphics, launch materials, social media creatives, and related campaign assets.',
    includes: ['Promotional graphics', 'Launch visuals', 'Social media creatives', 'Campaign asset sets'],
    cta: 'Explore Creative Campaigns',
  },
  {
    slug: 'publishing-support',
    href: '/publishing-support',
    name: 'Publishing Support',
    short: 'Practical help preparing and presenting your book, shaped around your needs and agreed scope.',
    overview:
      'We offer practical assistance with publishing preparation and presentation, depending on each author’s needs and the agreed scope of work.',
    includes: ['Preparation guidance', 'Presentation materials', 'Author biography support', 'Timeline organization'],
    cta: 'Explore Publishing Support',
  },
  {
    slug: 'author-outreach',
    href: '/author-outreach',
    name: 'Author Outreach',
    short: 'Thoughtful outreach and professional communication that introduces you and your work to relevant audiences.',
    overview:
      'We support relevant outreach, professional communication, reader visibility activities, and appropriate opportunities to introduce authors and their work to relevant audiences.',
    includes: ['Outreach planning', 'Professional communication', 'Reader visibility activities', 'Audience connection'],
    cta: 'Explore Author Outreach',
  },
]

export type TeamMember = { name: string; role: string; photo: string; w: number; h: number; alt: string; summary: string }

export const founder: TeamMember = {
  name: 'Rapheal Adebayo',
  role: 'Founder & Director',
  photo: '/img/team/rapheal-adebayo-profile.jpg',
  w: 1344,
  h: 1800,
  alt: 'Rapheal Adebayo, Founder & Director of Booklith, in a charcoal suit in a book-lined office',
  summary:
    'Rapheal leads Booklith’s direction and oversees how strategy, creative work, publishing support, and outreach come together for each author.',
}

export const team: TeamMember[] = [
  {
    name: 'Emmanuel Adebayo',
    role: 'Book Marketing Strategist',
    photo: '/img/team/emmanuel-adebayo.jpg',
    w: 1800,
    h: 1800,
    alt: 'Emmanuel Adebayo, Book Marketing Strategist, seated at a desk in front of bookshelves',
    summary: 'Focuses on book positioning, promotional messaging, and planning marketing activity around each title.',
  },
  {
    name: 'Naomi Adebayo',
    role: 'Creative Director',
    photo: '/img/team/naomi-adebayo.jpg',
    w: 1350,
    h: 1800,
    alt: 'Naomi Adebayo, Creative Director, seated at a desk with a laptop',
    summary: 'Guides the visual direction of campaigns, promotional graphics, and author-brand materials.',
  },
  {
    name: 'Samuel Adebayo',
    role: 'Author Outreach Specialist',
    photo: '/img/team/samuel-adebayo.jpg',
    w: 1350,
    h: 1800,
    alt: 'Samuel Adebayo, Author Outreach Specialist, standing in an office with bookshelves',
    summary: 'Supports outreach planning and professional communication that introduces authors to relevant audiences.',
  },
  {
    name: 'Serah Adebayo',
    role: 'Publishing & Author Support Specialist',
    photo: '/img/team/serah-adebayo.jpg',
    w: 1350,
    h: 1800,
    alt: 'Serah Adebayo, Publishing & Author Support Specialist, standing by a window holding a folder',
    summary: 'Helps authors with practical publishing preparation, presentation materials, and day-to-day support.',
  },
]

export const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'book-marketing', label: 'Book Marketing' },
  { id: 'author-branding', label: 'Author Branding' },
  { id: 'book-promotion', label: 'Book Promotion' },
  { id: 'creative-campaigns', label: 'Creative Campaigns' },
  { id: 'social-media', label: 'Social Media' },
  { id: 'publishing-support', label: 'Publishing Support' },
] as const

export type Media =
  | { type: 'image'; src: string; alt: string; w: number; h: number; caption?: string }
  | { type: 'video'; src: string; poster: string; label: string; w: number; h: number }

export type Project = {
  id: string
  number: string
  title: string
  author?: string
  summary: string
  categories: string[]
  media: Media[]
}

export const projects: Project[] = [
  {
    id: 'lions-of-the-great-rift',
    number: '01',
    title: 'Lions of the Great Rift',
    author: 'Neema Wanjiru Mwangi',
    summary:
      'Cover artwork and a promotional campaign banner that pairs the cover with the line “Some battles are worth protecting.”',
    categories: ['book-marketing', 'book-promotion', 'creative-campaigns', 'social-media'],
    media: [
      { type: 'image', src: '/img/work/lions-cover-art.jpg', w: 1254, h: 1254, caption: 'Cover artwork',
        alt: 'Lions of the Great Rift cover artwork: a figure beside a lion overlooking a sunlit Rift Valley, with the title and author name Neema Wanjiru Mwangi' },
      { type: 'image', src: '/img/work/lions-campaign-banner.jpg', w: 1200, h: 896, caption: 'Campaign banner',
        alt: 'Lions of the Great Rift promotional banner with the tagline “Some battles are worth protecting.”' },
    ],
  },
  {
    id: 'whispers-of-the-niger-dawn',
    number: '02',
    title: 'Whispers of the Niger Dawn',
    author: 'Amara Chidinma Okoro',
    summary:
      'Book cover design and a styled promotional graphic built around the line “Every family carries a story.”',
    categories: ['book-marketing', 'book-promotion', 'creative-campaigns', 'social-media'],
    media: [
      { type: 'image', src: '/img/work/whispers-cover.jpg', w: 1005, h: 1800, caption: 'Cover design',
        alt: 'Whispers of the Niger Dawn book cover: figures on a wooden jetty facing a misty river at dawn, by Amara Chidinma Okoro' },
      { type: 'image', src: '/img/work/whispers-promo.jpg', w: 1024, h: 1024, caption: 'Promotional graphic',
        alt: 'Whispers of the Niger Dawn promotional graphic showing the book with the headline “Every family carries a story.”' },
    ],
  },
  {
    id: 'beyond-the-rainbow-bridge',
    number: '03',
    title: 'Beyond the Rainbow Bridge',
    author: 'Thabo Dlamini',
    summary:
      'An author feature graphic, a set of publishing preparation materials — including editorial feedback notes and an author biography — and a short author film.',
    categories: ['publishing-support', 'author-branding'],
    media: [
      { type: 'image', src: '/img/work/rainbow-bridge-author-feature.jpg', w: 1800, h: 1800, caption: 'Author feature',
        alt: 'Beyond the Rainbow Bridge author feature graphic: title panel beside a portrait of author Thabo Dlamini at a desk with manuscripts' },
      { type: 'image', src: '/img/work/rainbow-bridge-publishing-pack.jpg', w: 1344, h: 1800, caption: 'Publishing materials',
        alt: 'Beyond the Rainbow Bridge publishing materials laid on a desk: the book, editorial feedback notes, a timeline, and an author biography' },
      { type: 'video', src: '/video/rainbow-bridge-film.mp4', poster: '/img/work/rainbow-bridge-film-poster.jpg', w: 1280, h: 720,
        label: 'Short author film for Beyond the Rainbow Bridge: the author reading in a library' },
    ],
  },
  {
    id: 'client-project-4',
    number: '04',
    title: 'Client Project 4',
    summary: 'An author portrait and a short film of the author at work with a manuscript, for use across author-brand materials.',
    categories: ['author-branding'],
    media: [
      { type: 'image', src: '/img/work/project4-author-portrait.jpg', w: 1344, h: 1800, caption: 'Author portrait',
        alt: 'Author portrait: the author smiling in a dark blazer, holding glasses, in a bright office lined with books' },
      { type: 'video', src: '/video/project4-film.mp4', poster: '/img/work/project4-film-poster.jpg', w: 1280, h: 720,
        label: 'Short author film for Client Project 4: the author reviewing a manuscript in a book-lined workspace' },
    ],
  },
  {
    id: 'client-project-5',
    number: '05',
    title: 'Client Project 5',
    summary:
      'An author portrait, a reader-event photograph, and a short film of the author in conversation with readers among the bookshelves.',
    categories: ['author-branding', 'book-promotion'],
    media: [
      { type: 'image', src: '/img/work/project5-author-portrait.jpg', w: 1344, h: 1800, caption: 'Author portrait',
        alt: 'Author portrait: the author smiling in a navy suit, seated in a leather armchair in a library and holding books' },
      { type: 'image', src: '/img/work/project5-reader-event.jpg', w: 1800, h: 1344, caption: 'Reader event',
        alt: 'The author talking with readers at a bookshop event' },
      { type: 'video', src: '/video/project5-film.mp4', poster: '/img/work/project5-film-poster.jpg', w: 1280, h: 720,
        label: 'Short film for Client Project 5: the author interacting with readers in a bookshop' },
    ],
  },
]

export const projectById = (id: string) => projects.find((p) => p.id === id)!

export const stages = [
  { n: '01', name: 'Understand', text: 'Understand the book, the author’s goals, intended audience, and current needs.' },
  { n: '02', name: 'Position', text: 'Clarify how the book and author should be presented and what the communication should emphasize.' },
  { n: '03', name: 'Create', text: 'Develop relevant creative assets, promotional materials, and presentation elements.' },
  { n: '04', name: 'Connect', text: 'Support appropriate outreach and activities intended to improve visibility.' },
  { n: '05', name: 'Grow', text: 'Help authors maintain a consistent, recognizable presence over time.' },
]

export const testimonials = [
  { name: 'Amaka Eze', country: 'Nigeria', quote: 'Booklith completely changed the way I presented my book to the world. From the branding to the marketing strategy, everything was handled professionally. I finally felt confident promoting my work as an author.' },
  { name: 'Daniel Adeyemi', country: 'Nigeria', quote: 'I was impressed by how well Booklith understood my vision. They helped me position my book professionally and gave me the visibility I needed. The entire process was smooth, creative, and well organized.' },
  { name: 'Abena Mensah', country: 'Ghana', quote: 'Working with Booklith was one of the best decisions I made for my book. They turned my ideas into a strong author brand and gave my book the professional presence it deserved. Highly recommended!' },
  { name: 'Olivia Carter', country: 'United Kingdom', quote: 'Booklith delivered beyond my expectations. Their attention to detail, creativity, and understanding of book marketing made the entire experience exceptional. My book now looks and feels like a professionally established brand.' },
  { name: 'Marcus Johnson', country: 'United States', quote: 'From publishing support to marketing, Booklith made the process much easier for me. They understood my audience and helped me present my book in a way that truly connected with readers. Excellent service!' },
  { name: 'Sophia Williams', country: 'Canada', quote: 'Booklith gave my book the visibility and professional identity I had always wanted. Their team was responsive, creative, and genuinely invested in the success of my project. I would absolutely work with them again.' },
]
