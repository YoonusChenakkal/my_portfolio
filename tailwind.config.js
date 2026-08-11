/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#09090A',
        surface: '#0F0F11',
        elevate: '#161619',
        line: '#232328',
        cream: '#F0EEE8',
        muted: '#8A8A84',
        faint: '#5C5C58',
        gold: {
          DEFAULT: '#E7B84B',
          soft: '#F3DA9C',
          deep: '#A87B1C',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Iowan Old Style', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        widestx: '0.28em',
      },
      maxWidth: {
        shell: '82rem',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.06)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        marquee: 'marquee 40s linear infinite',
        breathe: 'breathe 7s ease-in-out infinite',
        blink: 'blink 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
