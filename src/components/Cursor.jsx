import { useEffect, useRef, useState } from 'react'
import { useIsDesktop, useReducedMotion } from '../hooks'

/**
 * Custom pointer: a hard dot that tracks 1:1 and a soft ring that eases behind it.
 * Position is written straight to the DOM in a rAF loop — putting it in React
 * state would re-render the whole tree on every mousemove.
 */
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const target = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })

  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState('')
  const [visible, setVisible] = useState(false)

  const desktop = useIsDesktop()
  const reduced = useReducedMotion()
  const enabled = desktop && !reduced

  useEffect(() => {
    if (!enabled) return

    let frame = 0

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
      setVisible(true)

      const interactive = e.target.closest('a, button, [data-cursor]')
      setHovering(Boolean(interactive))
      setLabel(interactive?.dataset?.cursorLabel ?? '')
    }

    const onLeave = () => setVisible(false)

    const tick = () => {
      // Ease the ring toward the pointer; the dot snaps to it exactly.
      ring.current.x += (target.current.x - ring.current.x) * 0.16
      ring.current.y += (target.current.y - ring.current.y) * 0.16

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`
      }

      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    frame = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(frame)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[70] transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        ref={ringRef}
        className={`absolute left-0 top-0 flex items-center justify-center rounded-full border transition-[width,height,background-color,border-color] duration-300 ease-out ${
          label
            ? 'h-16 w-16 border-gold bg-gold/15'
            : hovering
              ? 'h-12 w-12 border-gold/70 bg-gold/10'
              : 'h-8 w-8 border-cream/25 bg-transparent'
        }`}
      >
        {label && (
          <span className="font-mono text-[9px] uppercase tracking-widestx text-gold-soft">
            {label}
          </span>
        )}
      </div>

      <div
        ref={dotRef}
        className={`absolute left-0 top-0 rounded-full bg-gold transition-opacity duration-200 ${
          hovering || label ? 'opacity-0' : 'h-1.5 w-1.5 opacity-100'
        }`}
      />
    </div>
  )
}
