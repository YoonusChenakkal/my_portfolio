import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import { profile } from '../data/content'
import { useLocalTime } from '../hooks'
import { Reveal, StatusDot } from './ui'

const channels = [
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/yoonuschenakkal',
    href: profile.linkedin,
  },
  {
    Icon: MessageCircle,
    label: 'WhatsApp',
    value: profile.phone,
    href: `https://wa.me/${profile.phoneRaw}`,
  },
  {
    Icon: Github,
    label: 'GitHub',
    value: profile.githubHandle,
    href: profile.github,
  },
]

export default function Contact() {
  const time = useLocalTime(profile.timezone)

  return (
    <section id="contact" className="relative isolate overflow-hidden px-6 pt-24 sm:px-10 lg:pt-32">
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-1/2 -z-10 h-[30rem] w-[52rem] -translate-x-1/2 rounded-full bg-gold/[0.08] blur-[140px]"
      />

      <div className="mx-auto w-full max-w-shell">
        <Reveal className="flex items-baseline gap-4">
          <span className="font-mono text-[11px] tracking-widestx text-gold/70">05</span>
          <span className="eyebrow">Contact</span>
          <span className="rule flex-1 translate-y-[-3px]" />
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-10 max-w-4xl text-balance font-display text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] tracking-tightest text-cream">
            Have something worth
            <span className="italic text-gold"> building</span>?
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            I am open to full-time roles and freelance projects — especially anything that ships to
            a real store with real users. The fastest way to reach me is email.
          </p>
        </Reveal>

        {/* Email as the primary target */}
        <Reveal delay={240} className="mt-12">
          <a
            href={`mailto:${profile.email}`}
            data-cursor-label="Email"
            className="group inline-flex max-w-full items-center gap-4 sm:gap-6"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-elevate text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink sm:h-16 sm:w-16">
              <Mail size={20} />
            </span>
            <span className="link-wipe min-w-0 break-all text-lg font-medium text-cream transition-colors duration-500 group-hover:text-gold sm:text-2xl lg:text-3xl">
              {profile.email}
            </span>
          </a>
        </Reveal>

        {/* Secondary channels */}
        <Reveal delay={320} className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {channels.map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 bg-ink p-6 transition-colors duration-500 hover:bg-elevate"
            >
              <span className="min-w-0">
                <span className="flex items-center gap-2.5">
                  <Icon size={15} className="text-gold/70" />
                  <span className="eyebrow text-muted">{label}</span>
                </span>
                <span className="mt-2.5 block truncate text-sm text-cream transition-colors duration-500 group-hover:text-gold">
                  {value}
                </span>
              </span>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-faint transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
              />
            </a>
          ))}
        </Reveal>

        {/* Footer */}
        <footer className="mt-24 border-t border-line py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <StatusDot live={profile.available} />
              <span className="font-mono text-[11px] uppercase tracking-widestx text-muted">
                {profile.location} — {time} IST
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widestx text-faint">
              <span>© {new Date().getFullYear()} {profile.name}</span>
              <span className="hidden sm:inline">·</span>
              <span>Built with React &amp; Tailwind</span>
              <a href="#home" className="text-muted transition-colors duration-300 hover:text-gold">
                Back to top ↑
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
