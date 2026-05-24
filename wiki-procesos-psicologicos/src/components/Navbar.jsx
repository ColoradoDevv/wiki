import {
  BookOpen, Brain, BarChart2, Zap, Link2,
  UserCheck, GitBranch, Play, PenLine, HelpCircle,
  CircleCheck, BookMarked, GraduationCap, X,
} from 'lucide-react'

const NAV_ITEMS = [
  { id: 'intro',            label: 'Introducción',    icon: BookOpen,    color: '#BFECFF' },
  { id: 'procesos',         label: 'Procesos',         icon: Brain,       color: '#CDC1FF' },
  { id: 'comparativo',      label: 'Comparativo',      icon: BarChart2,   color: '#FFCCEA' },
  { id: 'influencia',       label: 'Influencia',       icon: Zap,         color: '#BFECFF' },
  { id: 'interdependencia', label: 'Interdependencia', icon: Link2,       color: '#CDC1FF' },
  { id: 'caso',             label: 'Caso Práctico',    icon: UserCheck,   color: '#FFCCEA' },
  { id: 'diagrama',         label: 'Diagrama',         icon: GitBranch,   color: '#BFECFF' },
  { id: 'video',            label: 'Video',            icon: Play,        color: '#CDC1FF' },
  { id: 'reflexion',        label: 'Reflexión',        icon: PenLine,     color: '#FFCCEA' },
  { id: 'trivia',           label: 'Trivia',           icon: HelpCircle,  color: '#BFECFF' },
  { id: 'conclusion',       label: 'Conclusión',       icon: CircleCheck, color: '#CDC1FF' },
  { id: 'referencias',      label: 'Referencias',      icon: BookMarked,  color: '#FFCCEA' },
]

export default function Navbar({ active, onSelect, open, onClose }) {
  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          onClick={onClose}
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.45)', zIndex: 20 }}
          className="md:hidden"
        />
      )}

      <aside
        className={open ? '' : '-translate-x-full md:translate-x-0'}
        style={{
          position: 'fixed', top: 0, left: 0,
          height: '100%', zIndex: 30, width: 260,
          backgroundColor: '#ffffff',
          boxShadow: '2px 0 20px rgba(205,193,255,0.25)',
          display: 'flex', flexDirection: 'column',
          transition: 'transform 0.3s ease',
          transform: open ? 'translateX(0)' : undefined,
        }}
      >
        {/* Gradient header */}
        <div style={{
          padding: '18px 20px', position: 'relative', overflow: 'hidden',
          background: 'linear-gradient(135deg, #CDC1FF 0%, #BFECFF 55%, #FFCCEA 100%)',
          flexShrink: 0,
        }}>
          <div style={{ position: 'absolute', right: -12, top: -12, width: 64, height: 64, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.9)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GraduationCap size={17} style={{ color: '#9f8fe8' }} />
              </div>
              <div>
                <p style={{ margin: 0, fontSize: 9, fontWeight: 900, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', fontFamily: "'Nunito', sans-serif" }}>UNAD · Psicología</p>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#1f2937', fontFamily: "'Nunito', sans-serif" }}>Wiki Psicológica</p>
              </div>
            </div>
            <button onClick={onClose} className="mobile-only" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#374151', padding: 6, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
              <X size={17} />
            </button>
          </div>
        </div>

        {/* Subtitle */}
        <div style={{ padding: '10px 20px', borderBottom: '1px solid #f3f4f6', backgroundColor: 'rgba(255,246,227,0.7)', flexShrink: 0 }}>
          <p style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontSize: 12, fontWeight: 700, color: '#374151', lineHeight: 1.4 }}>
            Motivación, Inteligencia y Creatividad
          </p>
          <p style={{ margin: '2px 0 0', fontSize: 10, fontWeight: 600, color: '#9ca3af', fontFamily: "'Nunito', sans-serif" }}>en la Conducta Humana</p>
        </div>

        {/* Nav list */}
        <nav style={{ flex: 1, overflowY: 'auto', padding: '10px 10px' }}>
          {NAV_ITEMS.map(({ id, label, icon: Icon, color }) => {
            const isActive = active === id
            return (
              <button
                key={id}
                onClick={() => onSelect(id)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: 10,
                  padding: '9px 10px', borderRadius: 11, marginBottom: 2,
                  border: 'none', cursor: 'pointer', textAlign: 'left',
                  fontSize: 13, fontWeight: 600, fontFamily: "'Nunito', sans-serif",
                  transition: 'all 0.15s ease',
                  backgroundColor: isActive ? color : 'transparent',
                  color: isActive ? '#1f2937' : '#6b7280',
                  boxShadow: isActive ? '0 1px 6px rgba(0,0,0,0.07)' : 'none',
                  minHeight: 40,
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.backgroundColor = '#f9fafb' }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                <span style={{ width: 27, height: 27, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, backgroundColor: isActive ? 'rgba(255,255,255,0.5)' : '#f3f4f6' }}>
                  <Icon size={13} style={{ color: isActive ? '#374151' : '#9ca3af' }} />
                </span>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div style={{ padding: '10px 20px', borderTop: '1px solid #f3f4f6', flexShrink: 0 }}>
          <p style={{ margin: 0, fontSize: 10, color: '#d1d5db', textAlign: 'center', fontWeight: 600, fontFamily: "'Nunito', sans-serif" }}>
            Procesos Psicologícos · 2026 <br></br>Creado por Mariana Betancourt Guerrero
          </p>
        </div>
      </aside>
    </>
  )
}
