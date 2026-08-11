import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { marqueeItems, profile } from '../data/content'
import { useLocalTime, useReducedMotion } from '../hooks'
import { StatusDot } from './ui'

export default function Hero() {
  const roleIndex = useRoleRotation(profile.roles.length)
  const time = useLocalTime(profile.timezone)

  return (
    <section id="home" className="relative isolate overflow-hidden px-6 pb-16 pt-32 sm:px-10 lg:pb-24 lg:pt-40">
      <Backdrop />

      <div className="mx-auto grid w-full max-w-shell items-center gap-16 lg:grid-cols-12 lg:gap-10">
        {/* ---- Left: the statement ---- */}
        <div className="lg:col-span-7">
          <div className="flex animate-rise items-center gap-3">
            <StatusDot live={profile.available} />
            <span className="eyebrow text-muted">
              Available for work — {profile.discipline}
            </span>
          </div>

          <h1
            className="mt-8 animate-rise font-display text-[clamp(3rem,11vw,7.5rem)] leading-[0.88] tracking-tightest"
            style={{ animationDelay: '120ms' }}
          >
            <span className="block text-cream">{profile.first}</span>
            <span className="block italic text-gold">{profile.last}</span>
          </h1>

          {/* Role rotator — one line tall, each role crossfades in place. */}
          <div
            className="mt-8 flex animate-rise items-center gap-4"
            style={{ animationDelay: '220ms' }}
          >
            <span className="h-px w-10 bg-gold/60" aria-hidden="true" />
            <div className="relative h-6 flex-1 overflow-hidden">
              {profile.roles.map((role, i) => (
                <span
                  key={role}
                  className={`absolute inset-0 font-mono text-sm tracking-wide text-muted transition-all duration-700 ${
                    i === roleIndex
                      ? 'translate-y-0 opacity-100'
                      : 'pointer-events-none -translate-y-3 opacity-0'
                  }`}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          <p
            className="mt-8 max-w-xl animate-rise text-pretty text-lg leading-relaxed text-muted"
            style={{ animationDelay: '300ms' }}
          >
            {profile.summary}
          </p>

          <div
            className="mt-10 flex animate-rise flex-wrap items-center gap-4"
            style={{ animationDelay: '380ms' }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:bg-gold"
            >
              View selected work
              <ArrowDown
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-cream transition-all duration-300 hover:border-gold/50 hover:text-gold"
            >
              Get in touch
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div
            className="mt-12 flex animate-rise flex-wrap items-center gap-x-8 gap-y-4"
            style={{ animationDelay: '460ms' }}
          >
            <span className="inline-flex items-center gap-2 text-sm text-faint">
              <MapPin size={14} className="text-gold/70" />
              {profile.location}
            </span>
            <span className="font-mono text-xs tracking-wide text-faint">
              {time} IST
            </span>
            <div className="flex items-center gap-2">
              {[
                { Icon: Github, href: profile.github, label: 'GitHub' },
                { Icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
                { Icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ---- Right: the portrait ---- */}
        <div className="lg:col-span-5">
          <Portrait />
        </div>
      </div>

      <Marquee />
    </section>
  )
}

/** Portrait in an arch frame, desaturated until hovered. */
function Portrait() {
  return (
    <div
      className="group relative mx-auto w-full max-w-sm animate-rise lg:ml-auto lg:mr-0"
      style={{ animationDelay: '260ms' }}
    >
      {/* Warm bloom behind the frame */}
      <div
        aria-hidden="true"
        className="absolute inset-6 animate-breathe rounded-[999px] bg-gold/25 blur-[70px]"
      />

      <div className="relative overflow-hidden rounded-[999px_999px_28px_28px] border border-line bg-gradient-to-b from-elevate to-surface">
        <img
          src={profile.portrait}
          alt={`${profile.name}, software engineer`}
          className="mask-fade-b h-[26rem] w-full scale-105 object-cover object-top grayscale transition-all duration-700 ease-out group-hover:scale-100 group-hover:grayscale-0 sm:h-[32rem]"
          loading="eager"
          decoding="async"
        />

        {/* Inner hairline that warms on hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[999px_999px_28px_28px] border border-cream/5 transition-colors duration-700 group-hover:border-gold/25"
        />
      </div>

      {/* Caption plate */}
      <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full border border-line bg-ink/90 px-5 py-2.5 backdrop-blur-xl">
        <span className="font-mono text-[10px] uppercase tracking-widestx text-gold">
          {profile.title}
        </span>
        <span className="h-3 w-px bg-line" aria-hidden="true" />
        <span className="font-mono text-[10px] uppercase tracking-widestx text-faint">
          Since 2024
        </span>
      </div>
    </div>
  )
}

/** Infinite tech ticker. Duplicated once so the -50% translate loops seamlessly. */
function Marquee() {
  const reduced = useReducedMotion()
  const track = [...marqueeItems, ...marqueeItems]

  return (
    <div className="mask-fade-x relative mt-24 border-y border-line py-5" aria-hidden="true">
      <div
        className={`flex w-max items-center gap-10 ${reduced ? '' : 'animate-marquee'}`}
        style={{ animationPlayState: 'running' }}
      >
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="font-mono text-xs uppercase tracking-widestx text-faint">{item}</span>
            <span className="h-1 w-1 rounded-full bg-gold/50" />
          </span>
        ))}
      </div>
    </div>
  )
}

/** Ambient backdrop: fine grid, warm top-right glow, vignette to the page black. */
function Backdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
      <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-gold/10 blur-[130px]" />
      <div className="absolute -left-40 top-1/3 h-[26rem] w-[26rem] rounded-full bg-gold/[0.06] blur-[130px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
    </div>
  )
}

/** Advances the role index every 2.8s; frozen when reduced motion is on. */
function useRoleRotation(count) {
  const [index, setIndex] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || count <= 1) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 2800)
    return () => clearInterval(id)
  }, [count, reduced])

  return index
}
