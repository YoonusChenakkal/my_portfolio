import About from './components/About'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Stack from './components/Stack'
import Stats from './components/Stats'
import Work from './components/Work'

export default function App() {
  return (
    <div className="grain relative min-h-screen bg-ink">
      <a
        href="#work"
        className="sr-only left-4 top-4 z-[80] rounded-full bg-gold px-5 py-2 text-sm font-medium text-ink focus:not-sr-only focus:fixed"
      >
        Skip to content
      </a>

      <Cursor />
      <Nav />

      <main>
        <Hero />
        <Stats />
        <About />
        <Work />
        <Stack />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
