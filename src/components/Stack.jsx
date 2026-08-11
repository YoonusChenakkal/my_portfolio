import { skills } from '../data/content'
import { Reveal, Section, SectionHeading } from './ui'

export default function Stack() {
  return (
    <Section id="stack">
      <SectionHeading
        index="03"
        label="Stack"
        title={
          <>
            The tools I reach for
            <span className="italic text-gold"> first</span>.
          </>
        }
        lead="One Flutter codebase, wired to whatever the product needs — Firebase, a Node.js service, a Django REST API, a payment gateway."
      />

      <div className="mt-16 border-t border-line">
        {skills.map((group, i) => (
          <Reveal
            key={group.label}
            delay={i * 70}
            className="group grid gap-5 border-b border-line py-8 lg:grid-cols-12 lg:gap-10"
          >
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-gold/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-sm font-medium text-cream transition-colors duration-500 group-hover:text-gold">
                  {group.label}
                </h3>
              </div>
            </div>

            <div className="lg:col-span-9">
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="chip hover:border-gold/40 hover:bg-gold/10 hover:text-gold-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
