import { MapPin } from 'lucide-react'
import { experience } from '../data/content'
import { Reveal, Section, SectionHeading, StatusDot } from './ui'

export default function Experience() {
  return (
    <Section id="experience" className="border-y border-line bg-surface/30">
      <SectionHeading
        index="04"
        label="Experience"
        title={
          <>
            Where the work
            <span className="italic text-gold"> happened</span>.
          </>
        }
      />

      <div className="mt-16">
        {experience.map((job, i) => (
          <Reveal key={job.id} delay={i * 100} className="relative">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Sticky period rail */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32 lg:pb-16">
                  <div className="flex items-center gap-3">
                    {job.current && <StatusDot />}
                    <span className="font-mono text-[11px] uppercase tracking-widestx text-gold/80">
                      {job.period}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-3xl leading-tight tracking-tightest text-cream sm:text-4xl">
                    {job.role}
                  </h3>

                  <div className="mt-2 text-base text-cream/80">{job.company}</div>
                  {job.legal && (
                    <div className="mt-0.5 font-mono text-[11px] text-faint">{job.legal}</div>
                  )}

                  <div className="mt-3 inline-flex items-center gap-2 text-sm text-muted">
                    <MapPin size={13} className="text-gold/60" />
                    {job.place}
                  </div>
                </div>
              </div>

              {/* Bullets, hung off a vertical rule */}
              <div className="lg:col-span-8">
                <div className="border-l border-line pl-6 sm:pl-8">
                  {job.points && <Points points={job.points} />}

                  {job.groups?.map((group, g) => (
                    <div key={group.title} className={g > 0 || job.points ? 'mt-10' : ''}>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h4 className="text-base font-medium text-cream">{group.title}</h4>
                        {group.note && (
                          <span className="chip chip-hl py-0.5 text-[10px]">{group.note}</span>
                        )}
                      </div>

                      <div className="mt-1.5 font-mono text-[11px] uppercase tracking-widestx text-faint">
                        {group.platforms}
                      </div>

                      <Points points={group.points} className="mt-5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {i < experience.length - 1 && <div className="rule my-16" />}
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/** Bullet list whose markers sit out on the section's vertical rule. */
function Points({ points, className = '' }) {
  return (
    <ul className={`space-y-5 ${className}`}>
      {points.map((point) => (
        <li key={point} className="group relative text-pretty leading-relaxed text-muted">
          <span
            aria-hidden="true"
            className="absolute -left-[1.6rem] top-[0.6rem] h-1.5 w-1.5 rounded-full bg-line transition-colors duration-500 group-hover:bg-gold sm:-left-[2.1rem]"
          />
          <span className="transition-colors duration-500 group-hover:text-cream/90">{point}</span>
        </li>
      ))}
    </ul>
  )
}
