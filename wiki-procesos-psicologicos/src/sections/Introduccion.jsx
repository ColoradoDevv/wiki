import { Target, Brain, Sparkles } from 'lucide-react'

const PROCESSES = [
  { Icon: Target,   label: 'Motivación',   type: 'Proceso Activador', bg: '#BFECFF' },
  { Icon: Brain,    label: 'Inteligencia', type: 'Proceso Superior',  bg: '#CDC1FF' },
  { Icon: Sparkles, label: 'Creatividad',  type: 'Proceso Superior',  bg: '#FFCCEA' },
]

export default function Introduccion() {
  return (
    <div>
      {/* Hero */}
      <div className="wiki-hero" style={{
        position: 'relative', overflow: 'hidden', borderRadius: 24, marginBottom: 24,
        background: 'linear-gradient(135deg, #CDC1FF 0%, #BFECFF 50%, #FFCCEA 100%)',
      }}>
        <div className="float-anim" style={{ position: 'absolute', right: -24, top: -24, width: 120, height: 120, borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', backgroundColor: 'rgba(255,255,255,0.2)' }} />
        <div className="float-anim" style={{ position: 'absolute', left: -16, bottom: -16, width: 80, height: 80, borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', backgroundColor: 'rgba(255,255,255,0.15)', animationDelay: '1.5s' }} />

        <div style={{ position: 'relative' }}>
          <p style={{ margin: '0 0 10px', fontSize: 11, fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', fontFamily: "'Nunito', sans-serif" }}>
            UNAD · Psicología General
          </p>
          <h1 style={{ margin: '0 0 16px', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px, 5vw, 32px)', fontWeight: 800, color: '#1f2937', lineHeight: 1.2 }}>
            Motivación, Inteligencia<br />y Creatividad en la<br />Conducta Humana
          </h1>

          <div className="wiki-pills">
            <span className="wiki-pill" style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: 99, padding: '7px 14px', fontSize: 12, fontWeight: 700, color: '#374151', fontFamily: "'Nunito', sans-serif" }}>
              <Target size={13} /> Proceso Activador de Conducta
            </span>
            <span className="wiki-pill" style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: 99, padding: '7px 14px', fontSize: 12, fontWeight: 700, color: '#374151', fontFamily: "'Nunito', sans-serif" }}>
              <Brain size={13} /> Procesos Psicológicos Superiores
            </span>
          </div>
        </div>
      </div>

      {/* Intro text */}
      <div className="wiki-text-block" style={{ backgroundColor: '#ffffff', borderRadius: 18, marginBottom: 18, boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}>
        <h2 style={{ margin: '0 0 12px', fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700, color: '#1f2937' }}>
          Introducción
        </h2>
        <p style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.75, fontFamily: "'Nunito', sans-serif" }}>
          Los procesos psicológicos permiten comprender cómo las personas piensan, actúan y se relacionan
          con su entorno. En esta wiki analizaremos la motivación, la inteligencia y la creatividad,
          destacando su importancia, su relación entre sí y su influencia en la conducta humana y en el
          desarrollo de tareas cognitivas complejas.
        </p>
      </div>

      {/* Three process pills */}
      <div className="wiki-grid-3" style={{ gap: 12 }}>
        {PROCESSES.map(({ Icon, label, type, bg }) => (
          <div key={label} style={{ backgroundColor: bg, borderRadius: 16, padding: '18px 16px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
              <Icon size={26} style={{ color: '#374151' }} />
            </div>
            <p style={{ margin: '0 0 4px', fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: '#1f2937' }}>{label}</p>
            <p style={{ margin: 0, fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b7280', fontFamily: "'Nunito', sans-serif" }}>{type}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
