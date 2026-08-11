import { useInView } from '../hooks'

/**
 * Fades and lifts its children in on first scroll into view.
 * `as` lets it stand in for any wrapper element without adding a div.
 */
export function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Numbered section header: `01 — About` over a hairline rule. */
export function SectionHeading({ index, label, title, lead, className = '' }) {
  return (
    <div className={className}>
      <Reveal className="flex items-baseline gap-4">
        <span className="font-mono text-[11px] tracking-widestx text-gold/70">{index}</span>
        <span className="eyebrow">{label}</span>
        <span className="rule flex-1 translate-y-[-3px]" />
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-8 font-display text-4xl leading-[1.05] tracking-tightest text-cream sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>

      {lead && (
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  )
}

/** Standard section shell — vertical rhythm and the page gutter in one place. */
export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative px-6 py-24 sm:px-10 lg:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-shell">{children}</div>
    </section>
  )
}

/** Green/amber dot that reads as a live status indicator. */
export function StatusDot({ live = true }) {
  return (
    <span className="relative flex h-2 w-2" aria-hidden="true">
      <span
        className={`absolute inline-flex h-full w-full rounded-full opacity-60 ${
          live ? 'animate-ping bg-emerald-400' : 'bg-amber-400'
        }`}
      />
      <span
        className={`relative inline-flex h-2 w-2 rounded-full ${
          live ? 'bg-emerald-400' : 'bg-amber-400'
        }`}
      />
    </span>
  )
}
