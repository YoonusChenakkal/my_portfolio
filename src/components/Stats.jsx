import { stats } from '../data/content'
import { useCountUp, useInView } from '../hooks'

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <section ref={ref} className="border-b border-line px-6 sm:px-10">
      <div className="mx-auto grid max-w-shell grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Stat key={stat.label} stat={stat} start={inView} delay={i * 120} index={i} />
        ))}
      </div>
    </section>
  )
}

function Stat({ stat, start, delay, index }) {
  const count = useCountUp(stat.value, start, 1500)

  return (
    <div
      className={`group border-line py-10 pr-6 transition-all duration-700 ease-out sm:py-12
                  ${index % 2 === 0 ? 'border-r' : ''}
                  ${index < 2 ? 'border-b lg:border-b-0' : ''}
                  lg:border-r lg:last:border-r-0
                  ${start ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="pl-0 lg:pl-8">
        <div className="flex items-baseline gap-0.5 font-display text-5xl tracking-tightest text-cream transition-colors duration-500 group-hover:text-gold sm:text-6xl">
          <span className="text-gold/70">{stat.prefix}</span>
          <span className="tabular-nums">{count}</span>
          <span>{stat.suffix}</span>
        </div>
        <div className="mt-3 text-sm font-medium text-cream/90">{stat.label}</div>
        <div className="mt-1 font-mono text-[11px] uppercase tracking-widestx text-faint">
          {stat.sub}
        </div>
      </div>
    </div>
  )
}
