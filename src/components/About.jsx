import { ArrowUpRight, Building2, GraduationCap } from 'lucide-react'
import { education, experience, profile } from '../data/content'
import { Reveal, Section, StatusDot } from './ui'

const current = experience[0]

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Sticky index rail */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal className="flex items-baseline gap-4">
              <span className="font-mono text-[11px] tracking-widestx text-gold/70">01</span>
              <span className="eyebrow">About</span>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-8 font-display text-4xl leading-[1.05] tracking-tightest text-cream sm:text-5xl">
                Building for the
                <span className="italic text-gold"> pocket</span>, shipping to
                <span className="italic text-gold"> production</span>.
              </h2>
            </Reveal>

            <Reveal delay={160} className="mt-10 hidden lg:block">
              <NowCard />
            </Reveal>
          </div>
        </div>

        {/* Prose */}
        <div className="lg:col-span-8">
          <div className="space-y-6">
            {profile.bio.map((para, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="text-pretty text-lg leading-[1.75] text-muted">
                  {emphasise(para)}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={280} className="mt-10 lg:hidden">
            <NowCard />
          </Reveal>

          {/* Education */}
          <Reveal delay={320} className="mt-14">
            <div className="flex items-center gap-3">
              <GraduationCap size={15} className="text-gold/70" />
              <span className="eyebrow">Education</span>
              <span className="rule flex-1" />
            </div>

            <dl className="mt-6 divide-y divide-line border-y border-line">
              {education.map((item) => (
                <div
                  key={item.qualification}
                  className="group flex flex-wrap items-baseline justify-between gap-2 py-4 transition-colors duration-300"
                >
                  <dt className="text-sm text-cream transition-colors duration-300 group-hover:text-gold">
                    {item.qualification}
                    {item.institution && (
                      <span className="text-muted"> — {item.institution}</span>
                    )}
                  </dt>
                  <dd className="font-mono text-xs text-faint">{item.year}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

/** "Currently at …" card — pulled from the first experience entry. */
function NowCard() {
  return (
    <div className="panel rounded-2xl p-6">
      <div className="flex items-center gap-2">
        <StatusDot live={profile.available} />
        <span className="eyebrow">Currently</span>
      </div>

      <div className="mt-5 flex items-start gap-3">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-elevate">
          <Building2 size={15} className="text-gold" />
        </span>
        <div>
          <div className="text-sm font-medium text-cream">{current.role}</div>
          <div className="text-sm text-muted">{current.company}</div>
          <div className="mt-1 font-mono text-[11px] text-faint">
            {current.place} · {current.period}
          </div>
        </div>
      </div>

      <a
        href="#experience"
        className="group mt-6 inline-flex items-center gap-2 text-sm text-gold transition-colors duration-300 hover:text-gold-soft"
      >
        Full experience
        <ArrowUpRight
          size={14}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>
    </div>
  )
}

/** Highlights a few key phrases in the bio without hand-splitting the strings. */
const KEY_PHRASES = [
  'five-application intercity bus booking ecosystem',
  'Android, iOS and the web',
  'full delivery cycle',
  '100,000+ users',
  '₹140 crore',
  'Firebase',
  'Node.js',
]

function emphasise(text) {
  const pattern = new RegExp(`(${KEY_PHRASES.map(escapeRegExp).join('|')})`, 'g')

  return text.split(pattern).map((part, i) =>
    KEY_PHRASES.includes(part) ? (
      <span key={i} className="text-cream">
        {part}
      </span>
    ) : (
      part
    )
  )
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
