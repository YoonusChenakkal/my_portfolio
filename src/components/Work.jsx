import { useState } from 'react'
import { Apple, ArrowUpRight, Lock, Play, Plus } from 'lucide-react'
import { projects } from '../data/content'
import { Reveal, Section, SectionHeading } from './ui'

export default function Work() {
  // First row starts open so the expand affordance is discoverable.
  const [openId, setOpenId] = useState(projects[0].id)

  return (
    <Section id="work" className="border-y border-line bg-surface/30">
      <SectionHeading
        index="02"
        label="Selected work"
        title={
          <>
            Products people
            <span className="italic text-gold"> actually use</span>.
          </>
        }
        lead="Shipped across Google Play, the App Store and the web — from a public-sector platform serving 100,000+ users to a five-application booking ecosystem."
      />

      <div className="mt-16 border-t border-line">
        {projects.map((project, i) => (
          <Row
            key={project.id}
            project={project}
            open={openId === project.id}
            onToggle={() => setOpenId(openId === project.id ? null : project.id)}
            delay={i * 60}
          />
        ))}
      </div>
    </Section>
  )
}

function Row({ project, open, onToggle, delay }) {
  const panelId = `project-panel-${project.id}`
  const hasLinks = Boolean(project.links.play || project.links.apple)

  return (
    <Reveal delay={delay} className="border-b border-line">
      <div
        className={`group relative transition-colors duration-500 ${
          open ? 'bg-elevate/40' : 'hover:bg-elevate/25'
        }`}
      >
        {/* Gold spine that grows down the left edge on hover/open */}
        <span
          aria-hidden="true"
          className={`absolute left-0 top-0 w-px bg-gold transition-all duration-500 ${
            open ? 'h-full' : 'h-0 group-hover:h-full'
          }`}
        />

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center gap-5 px-4 py-7 text-left sm:gap-8 sm:px-8 sm:py-9"
        >
          <span className="font-mono text-[11px] text-faint transition-colors duration-500 group-hover:text-gold">
            {project.index}
          </span>

          <span className="min-w-0 flex-1">
            <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span
                className={`font-display text-3xl leading-none tracking-tightest transition-colors duration-500 sm:text-4xl lg:text-5xl ${
                  open ? 'text-gold' : 'text-cream group-hover:text-gold'
                }`}
              >
                {project.name}
              </span>
              {project.confidential && (
                <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widestx text-faint">
                  <Lock size={10} />
                  NDA
                </span>
              )}
            </span>
            <span className="mt-2.5 block max-w-xl text-pretty text-sm text-muted">
              {project.tagline}
            </span>
          </span>

          {/* Meta rail — desktop only, the mobile view gets it inside the panel */}
          <span className="hidden shrink-0 flex-col items-end gap-2 lg:flex">
            <span className="flex items-center gap-2">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  project.status === 'Live' ? 'bg-emerald-400' : 'bg-amber-400'
                }`}
                aria-hidden="true"
              />
              <span className="font-mono text-[10px] uppercase tracking-widestx text-muted">
                {project.status}
              </span>
            </span>
            <span className="font-mono text-[10px] tracking-widestx text-faint">
              {project.platforms.join(' · ')}
            </span>
          </span>

          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
              open
                ? 'rotate-45 border-gold bg-gold text-ink'
                : 'border-line text-muted group-hover:border-gold/50 group-hover:text-gold'
            }`}
          >
            <Plus size={16} />
          </span>
        </button>

        {/* Expandable detail — 0fr → 1fr grid animates height without measuring it. */}
        <div
          id={panelId}
          role="region"
          aria-label={`${project.name} details`}
          className={`grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid gap-8 px-4 pb-10 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:pl-20">
              <div className="lg:col-span-7">
                <p className="text-pretty leading-relaxed text-muted">{project.description}</p>

                <ul className="mt-6 space-y-2.5">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-muted">
                      <span
                        className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-gold"
                        aria-hidden="true"
                      />
                      <span className="text-pretty">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5">
                <Meta label="Role">{project.org}</Meta>

                <Meta label="Status" className="lg:hidden">
                  {project.status} · {project.platforms.join(' · ')}
                </Meta>

                <Meta label="Year">{project.year}</Meta>

                <div className="mt-6">
                  <div className="eyebrow">Stack</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.links.play && (
                    <StoreLink href={project.links.play} Icon={Play} label="Play Store" />
                  )}
                  {project.links.apple && (
                    <StoreLink href={project.links.apple} Icon={Apple} label="App Store" />
                  )}
                  {!hasLinks && (
                    <span className="font-mono text-[11px] uppercase tracking-widestx text-faint">
                      {linkNote(project)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

/** Why a shipped project has no store button — never "coming soon" for a live app. */
function linkNote(project) {
  if (project.confidential) return 'Store listing withheld under NDA'
  if (project.status !== 'Live') return 'Not yet listed — in development'
  return 'Store links available on request'
}

function Meta({ label, children, className = '' }) {
  return (
    <div className={`mt-6 flex items-baseline justify-between gap-4 border-b border-line pb-3 first:mt-0 ${className}`}>
      <span className="eyebrow">{label}</span>
      <span className="text-right text-sm text-cream">{children}</span>
    </div>
  )
}

function StoreLink({ href, Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor-label="Open"
      className="group/link inline-flex items-center gap-2 rounded-full border border-line bg-elevate/60 px-4 py-2 text-sm text-cream transition-all duration-300 hover:border-gold/50 hover:bg-gold/10 hover:text-gold"
    >
      <Icon size={14} className="text-gold" />
      {label}
      <ArrowUpRight
        size={13}
        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
      />
    </a>
  )
}
