import { useState } from 'react'
import { Menu, ChevronLeft, ChevronRight, Brain } from 'lucide-react'
import Navbar from './components/Navbar'
import Introduccion from './sections/Introduccion'
import Procesos from './sections/Procesos'
import CuadroComparativo from './sections/CuadroComparativo'
import Influencia from './sections/Influencia'
import Interdependencia from './sections/Interdependencia'
import CasoPractico from './sections/CasoPractico'
import DiagramaFlujo from './sections/DiagramaFlujo'
import Video from './sections/Video'
import Reflexion from './sections/Reflexion'
import Trivia from './sections/Trivia'
import Conclusion from './sections/Conclusion'
import Referencias from './sections/Referencias'

const SECTION_ORDER = [
  'intro','procesos','comparativo','influencia','interdependencia',
  'caso','diagrama','video','reflexion','trivia','conclusion','referencias',
]

const SECTION_LABELS = {
  intro:'Introducción', procesos:'Procesos', comparativo:'Comparativo',
  influencia:'Influencia', interdependencia:'Interdependencia', caso:'Caso Práctico',
  diagrama:'Diagrama', video:'Video', reflexion:'Reflexión',
  trivia:'Trivia', conclusion:'Conclusión', referencias:'Referencias',
}

const SECTIONS = {
  intro:Introduccion, procesos:Procesos, comparativo:CuadroComparativo,
  influencia:Influencia, interdependencia:Interdependencia, caso:CasoPractico,
  diagrama:DiagramaFlujo, video:Video, reflexion:Reflexion,
  trivia:Trivia, conclusion:Conclusion, referencias:Referencias,
}

export default function App() {
  const [active, setActive] = useState('intro')
  const [menuOpen, setMenuOpen] = useState(false)

  const ActiveSection = SECTIONS[active]
  const currentIndex = SECTION_ORDER.indexOf(active)
  const prevId = currentIndex > 0 ? SECTION_ORDER[currentIndex - 1] : null
  const nextId = currentIndex < SECTION_ORDER.length - 1 ? SECTION_ORDER[currentIndex + 1] : null

  function navigate(id) {
    setActive(id)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#FFF6E3', fontFamily: "'Nunito', sans-serif" }}>
      <Navbar active={active} onSelect={navigate} open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main style={{ flex: 1, minHeight: '100vh' }}>

        {/* ── Mobile top bar ── */}
        <header className="mobile-only" style={{
          position: 'sticky', top: 0, zIndex: 10,
          alignItems: 'center', justifyContent: 'space-between',
          padding: '0 16px', height: 56,
          backgroundColor: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #f3f4f6',
          boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Brain size={18} style={{ color: '#9f8fe8' }} />
            <span style={{ fontWeight: 800, fontSize: 13, color: '#1f2937' }}>Wiki Psicológica</span>
          </div>

          {/* Current section badge */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1.2 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {currentIndex + 1}/{SECTION_ORDER.length}
            </span>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#374151', maxWidth: 120, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {SECTION_LABELS[active]}
            </span>
          </div>

          <button onClick={() => setMenuOpen(true)} style={{
            width: 40, height: 40, borderRadius: 10,
            backgroundColor: '#CDC1FF33', border: 'none', cursor: 'pointer',
            color: '#6b7280', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Menu size={20} />
          </button>
        </header>

        {/* ── Progress strip (mobile) ── */}
        <div className="mobile-only" style={{
          height: 3,
          backgroundColor: '#e5e7eb',
        }}>
          <div style={{
            height: '100%',
            width: `${((currentIndex + 1) / SECTION_ORDER.length) * 100}%`,
            background: 'linear-gradient(90deg, #BFECFF, #CDC1FF, #FFCCEA)',
            transition: 'width 0.4s ease',
          }} />
        </div>

        {/* ── Content ── */}
        <div className="md:ml-64">
          <div
            key={active}
            className="section-enter"
            style={{ maxWidth: 900, margin: '0 auto', padding: '32px 32px 0' }}
          >
            <ActiveSection />

            {/* ── Anterior / Siguiente ── */}
            <div
              className="wiki-nav-footer"
              style={{ justifyContent: prevId && nextId ? 'space-between' : prevId ? 'flex-start' : 'flex-end' }}
            >
              {prevId && (
                <button
                  onClick={() => navigate(prevId)}
                  className="wiki-nav-btn"
                  style={{ backgroundColor: '#ffffff', border: '2px solid #CDC1FF', color: '#374151', boxShadow: '0 2px 8px rgba(205,193,255,0.2)' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#CDC1FF'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff'}
                >
                  <ChevronLeft size={16} style={{ flexShrink: 0 }} />
                  <span>{SECTION_LABELS[prevId]}</span>
                </button>
              )}
              {nextId && (
                <button
                  onClick={() => navigate(nextId)}
                  className="wiki-nav-btn"
                  style={{ backgroundColor: '#CDC1FF', border: '2px solid #CDC1FF', color: '#1f2937', boxShadow: '0 2px 8px rgba(205,193,255,0.3)' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b5a8f5'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#CDC1FF'}
                >
                  <span>{SECTION_LABELS[nextId]}</span>
                  <ChevronRight size={16} style={{ flexShrink: 0 }} />
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
