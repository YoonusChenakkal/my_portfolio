import { useEffect, useRef, useState } from 'react'

/** True once the OS asks for reduced motion, and kept in sync if it changes. */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

/** True on viewports wide enough for hover affordances (custom cursor, row previews). */
export function useIsDesktop() {
  const [desktop, setDesktop] = useState(
    () => window.matchMedia?.('(min-width: 768px) and (hover: hover)').matches ?? false
  )

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px) and (hover: hover)')
    const onChange = () => setDesktop(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return desktop
}

/**
 * Fires once when the element scrolls into view.
 * Returns [ref, inView] — attach the ref, drive your own transition off inView.
 */
export function useInView({ threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null)
  // Without IntersectionObserver, start visible rather than hide forever.
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView]
}

/** Window scroll position, throttled to one update per animation frame. */
export function useScrollY() {
  const [y, setY] = useState(0)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        setY(window.scrollY)
        frame = 0
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return y
}

/**
 * Which section id currently owns the viewport.
 * Picks the last section whose top has passed the offset line.
 */
export function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    let frame = 0

    const check = () => {
      frame = 0
      let current = ''

      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= offset) current = id
      }

      // Bottom of the page always belongs to the last section.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 80) {
        current = ids[ids.length - 1]
      }

      setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }

    check()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ids, offset])

  return active
}

/** Counts 0 → target with an ease-out curve once `start` flips true. */
export function useCountUp(target, start, duration = 1600) {
  const [value, setValue] = useState(0)
  const reduced = useReducedMotion()
  const animate = start && !reduced

  useEffect(() => {
    if (!animate) return

    let frame = 0
    const begin = performance.now()

    const tick = (now) => {
      const t = Math.min((now - begin) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(target * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, animate, duration])

  // Reduced motion: jump straight to the final number, no ramp.
  if (reduced) return start ? target : 0
  return value
}

/** Live wall-clock in a given IANA timezone, ticking once a minute. */
export function useLocalTime(timeZone) {
  const format = () =>
    new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone,
    }).format(new Date())

  const [time, setTime] = useState(format)

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 30_000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone])

  return time
}
