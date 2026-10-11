const DRAFT_KEY = 'booklith-contact-draft'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const FIELDS = ['name', 'email', 'book-title', 'book-link', 'service', 'message'] as const

type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement

export function initContactForm() {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]')
  if (!form) return
  const alertBox = document.querySelector<HTMLElement>('[data-form-alert]')!
  const success = document.querySelector<HTMLElement>('[data-form-success]')!
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!
  const field = (n: string) => form.elements.namedItem(n) as Field | null
  let sending = false

  // We handle validation ourselves so messages are consistent and accessible
  form.noValidate = true

  // Restore an unsent draft, then apply ?service= from service pages
  try {
    const draft = JSON.parse(sessionStorage.getItem(DRAFT_KEY) || '{}') as Record<string, string>
    for (const n of FIELDS) {
      const el = field(n)
      if (el && draft[n] && !el.value) el.value = draft[n]
    }
  } catch {}
  const slug = new URLSearchParams(location.search).get('service')
  const select = field('service') as HTMLSelectElement | null
  if (slug && select) {
    const opt = Array.from(select.options).find((o) => o.dataset.slug === slug)
    if (opt) select.value = opt.value
  }

  const saveDraft = () => {
    try {
      const data: Record<string, string> = {}
      for (const n of FIELDS) data[n] = field(n)?.value ?? ''
      sessionStorage.setItem(DRAFT_KEY, JSON.stringify(data))
    } catch {}
  }

  function validateField(n: string): string {
    const el = field(n)
    if (!el) return ''
    const v = el.value.trim()
    let msg = ''
    if (n === 'name' && !v) msg = 'Please enter your name.'
    if (n === 'email') {
      if (!v) msg = 'Please enter your email address.'
      else if (!EMAIL_RE.test(v)) msg = 'Please enter a valid email address, like name@example.com.'
    }
    if (n === 'book-title' && !v) msg = 'Please enter your book’s title.'
    if (n === 'book-link' && v) {
      try {
        const u = new URL(/^https?:\/\//i.test(v) ? v : `https://${v}`)
        if (!u.hostname.includes('.')) throw new Error()
      } catch {
        msg = 'Please enter a valid web address, or leave this field empty.'
      }
    }
    if (n === 'message') {
      if (!v) msg = 'Please tell us a little about what you need.'
      else if (v.length < 10) msg = 'Please add a little more detail to your message.'
    }
    const errEl = form!.querySelector<HTMLElement>(`[data-error-for="${n}"]`)
    if (errEl) errEl.textContent = msg
    if (msg) el.setAttribute('aria-invalid', 'true')
    else el.removeAttribute('aria-invalid')
    return msg
  }

  for (const n of FIELDS) {
    const el = field(n)
    el?.addEventListener('input', () => {
      saveDraft()
      if (el.getAttribute('aria-invalid') === 'true') validateField(n)
    })
    el?.addEventListener('change', saveDraft)
    el?.addEventListener('blur', () => {
      if (el.value.trim()) validateField(n)
    })
  }

  function showAlert(html: string) {
    alertBox.innerHTML = html
    alertBox.hidden = false
    alertBox.focus()
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    if (sending) return
    alertBox.hidden = true

    const errors = FIELDS.map((n) => [n, validateField(n)] as const).filter(([, m]) => m)
    if (errors.length) {
      showAlert(
        `<p><strong>Please check ${errors.length === 1 ? '1 field' : `${errors.length} fields`}:</strong></p><ul>` +
          errors.map(([n, m]) => `<li><a href="#${n}">${m}</a></li>`).join('') +
          '</ul>',
      )
      field(errors[0][0])?.focus()
      return
    }

    // Normalise the optional link before sending
    const link = field('book-link')
    if (link && link.value.trim() && !/^https?:\/\//i.test(link.value.trim())) link.value = `https://${link.value.trim()}`

    sending = true
    submit.disabled = true
    submit.setAttribute('aria-busy', 'true')
    submit.textContent = 'Sending…'

    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString()
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      if (!res.ok) throw new Error(`Status ${res.status}`)
      try {
        sessionStorage.removeItem(DRAFT_KEY)
      } catch {}
      form.reset()
      form.hidden = true
      success.hidden = false
      success.focus()
    } catch {
      showAlert(
        '<p><strong>Sorry — your inquiry could not be sent.</strong> Your details are still here, so please try again in a moment. ' +
          'If the problem continues, email us at <a href="mailto:hello@booklith.name.ng">hello@booklith.name.ng</a>.</p>',
      )
    } finally {
      sending = false
      submit.disabled = false
      submit.removeAttribute('aria-busy')
      submit.textContent = 'Send Inquiry'
    }
  })
}
