import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { profile, sections } from '../data/content'
import { useScrollSpy, useScrollY } from '../hooks'
import { StatusDot } from './ui'

const sectionIds = ['home', ...sections.map((s) => s.id)]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const scrollY = useScrollY()
  const active = useScrollSpy(sectionIds)
  const condensed = scrollY > 40

  // Freeze the page behind the mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Escape closes the menu.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          condensed || open
            ? 'border-b border-line bg-ink/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-shell items-center justify-between gap-6 px-6 py-4 sm:px-10">
          <a
            href="#home"
            className="group flex items-center gap-3"
            onClick={() => setOpen(false)}
            aria-label="Back to top"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-elevate font-display text-sm text-gold transition-colors duration-500 group-hover:border-gold/50">
              YC
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-cream sm:block">
              {profile.name}
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Sections">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`group flex items-baseline gap-1.5 text-sm transition-colors duration-300 ${
                  active === s.id ? 'text-cream' : 'text-muted hover:text-cream'
                }`}
              >
                <span
                  className={`font-mono text-[10px] transition-colors duration-300 ${
                    active === s.id ? 'text-gold' : 'text-faint group-hover:text-gold/60'
                  }`}
                >
                  {s.index}
                </span>
                {s.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-sm font-medium text-gold-soft transition-all duration-300 hover:bg-gold hover:text-ink md:inline-flex"
            >
              Get in touch
              <ArrowUpRight size={14} />
            </a>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-cream transition-colors duration-300 hover:border-gold/50 hover:text-gold md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Scroll progress hairline */}
        <div
          className="h-px origin-left bg-gradient-to-r from-gold via-gold-soft to-transparent transition-transform duration-150"
          style={{ transform: `scaleX(${scrollProgress(scrollY)})` }}
          aria-hidden="true"
        />
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-ink/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="mt-24 flex flex-1 flex-col px-6" aria-label="Sections">
          {sections.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className={`flex items-baseline gap-4 border-b border-line py-5 transition-all duration-500 ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : '0ms' }}
            >
              <span className="font-mono text-[11px] text-gold/70">{s.index}</span>
              <span className="font-display text-3xl tracking-tight text-cream">{s.label}</span>
            </a>
          ))}

          <div className="mt-auto space-y-4 py-10">
            <div className="flex items-center gap-2">
              <StatusDot live={profile.available} />
              <span className="font-mono text-[11px] uppercase tracking-widestx text-muted">
                Open to opportunities
              </span>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="block text-sm text-muted transition-colors hover:text-gold"
            >
              {profile.email}
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

/** 0 → 1 across the scrollable height, guarding the un-scrollable case. */
function scrollProgress(y) {
  if (typeof document === 'undefined') return 0
  const max = document.body.scrollHeight - window.innerHeight
  if (max <= 0) return 0
  return Math.min(y / max, 1)
}
