import { UserCheck, Target, Brain, Sparkles, Trophy } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const steps = [
  { num: 1, Icon: Target,   title: 'Motivación',   text: 'La motivación impulsa al joven a esforzarse y terminar el trabajo de manera exitosa. Sin este impulso inicial, no existiría el deseo de comenzar ni la perseverancia para completarlo.', bg: '#BFECFF', border: '#8dc8ee' },
  { num: 2, Icon: Brain,    title: 'Inteligencia', text: 'Utiliza la inteligencia para investigar información, organizar las ideas y comprender cómo estructurar la página correctamente. Le permite tomar decisiones estratégicas y resolver problemas técnicos.', bg: '#CDC1FF', border: '#9f8fe8' },
  { num: 3, Icon: Sparkles, title: 'Creatividad',  text: 'Emplea la creatividad para diseñar un sitio llamativo, dinámico y diferente, utilizando colores, imágenes y recursos visuales que hagan más interesante la presentación del tema.', bg: '#FFCCEA', border: '#f090c5' },
]

export default function CasoPractico() {
  return (
    <div>
      <SectionHeader icon={UserCheck} number={5} title="Caso Práctico" subtitle="Integración de los tres procesos en una tarea cognitiva" bg="#FFCCEA" />

      <div className="wiki-text-block" style={{ backgroundColor: '#ffffff', borderRadius: 18, marginBottom: 22, boxShadow: '0 2px 14px rgba(0,0,0,0.05)', borderLeft: '4px solid #CDC1FF' }}>
        <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9ca3af', fontFamily: "'Nunito', sans-serif" }}>Escenario</p>
        <p style={{ margin: 0, fontSize: 15, color: '#1f2937', lineHeight: 1.7, fontWeight: 600, fontFamily: "'Nunito', sans-serif" }}>
          Un joven desea crear una página web para un proyecto universitario.
        </p>
      </div>

      <div className="wiki-timeline" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 22, top: 24, bottom: 24, width: 2, backgroundColor: '#e5e7eb', zIndex: 0 }} className="hidden md:block" />

        {steps.map(({ num, Icon, title, text, bg, border }) => (
          <div key={num} className="wiki-timeline-step">
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              backgroundColor: bg, border: `3px solid ${border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, fontWeight: 900, fontSize: 16, color: '#374151',
              zIndex: 1, fontFamily: "'Nunito', sans-serif",
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)', minWidth: 44,
            }}>
              {num}
            </div>
            <div style={{ backgroundColor: bg, borderRadius: 16, padding: '16px 18px', flex: 1, borderTop: `3px solid ${border}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <Icon size={17} style={{ color: '#374151', flexShrink: 0 }} />
                <h3 style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#1f2937' }}>{title}</h3>
              </div>
              <p style={{ margin: 0, fontSize: 13.5, color: '#374151', lineHeight: 1.65, fontFamily: "'Nunito', sans-serif" }}>{text}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 18, backgroundColor: '#1f2937', borderRadius: 18, padding: '16px 20px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <Trophy size={20} style={{ color: '#CDC1FF', flexShrink: 0, marginTop: 2 }} />
        <div>
          <p style={{ margin: '0 0 4px', fontWeight: 800, fontSize: 14, color: '#f9fafb', fontFamily: "'Nunito', sans-serif" }}>Resultado</p>
          <p style={{ margin: 0, fontSize: 13.5, color: '#d1d5db', lineHeight: 1.65, fontFamily: "'Nunito', sans-serif" }}>
            La integración de la motivación, la inteligencia y la creatividad permite desarrollar una tarea cognitiva de alto nivel de manera efectiva.
          </p>
        </div>
      </div>
    </div>
  )
}
