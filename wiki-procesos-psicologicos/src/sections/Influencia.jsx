import { Zap, Target, Brain, Sparkles, ArrowRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const blocks = [
  { Icon: Target,   title: 'Motivación',   text: 'Depende de procesos como la atención y la percepción, ya que una persona primero debe identificar un estímulo o una necesidad para sentirse impulsada a actuar. Del mismo modo, la memoria y el aprendizaje permiten mantener metas y experiencias previas que fortalecen la motivación.', bg: '#BFECFF' },
  { Icon: Brain,    title: 'Inteligencia', text: 'Requiere de la percepción, la memoria y el pensamiento para analizar información, resolver problemas y tomar decisiones adecuadas. Los procesos básicos son la base que le permite a la inteligencia operar de manera efectiva.', bg: '#CDC1FF' },
  { Icon: Sparkles, title: 'Creatividad',  text: 'Se relaciona con la capacidad de recordar experiencias, imaginar nuevas posibilidades y combinar ideas aprendidas para generar soluciones originales. Depende de la memoria y el aprendizaje para construir nuevos conceptos.', bg: '#FFCCEA' },
]

export default function Influencia() {
  return (
    <div>
      <SectionHeader icon={Zap} number={3} title="Influencia de los Procesos Psicológicos" subtitle="¿Cómo influyen los procesos psicológicos entre sí?" bg="#BFECFF" />

      <div className="wiki-text-block" style={{ backgroundColor: '#ffffff', borderRadius: 18, marginBottom: 18, boxShadow: '0 2px 14px rgba(0,0,0,0.05)' }}>
        <p style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.75, fontFamily: "'Nunito', sans-serif" }}>
          Los procesos psicológicos básicos —como la <strong>percepción, la atención, la memoria y el aprendizaje</strong>—
          influyen directamente en el funcionamiento de los procesos psicológicos superiores y activadores de la conducta
          humana, como la motivación, la inteligencia y la creatividad. Esto ocurre porque los procesos básicos son la base
          que permite recibir, organizar y comprender la información del entorno, facilitando así respuestas más complejas y conscientes.
        </p>
      </div>

      {/* Diagram: basic → superior */}
      <div className="wiki-basic-flow">
        {['Percepción', 'Atención', 'Memoria', 'Aprendizaje'].map(p => (
          <span key={p} style={{ backgroundColor: '#FFF6E3', border: '2px solid #CDC1FF', borderRadius: 99, padding: '6px 12px', fontSize: 12, fontWeight: 700, color: '#374151', fontFamily: "'Nunito', sans-serif", whiteSpace: 'nowrap' }}>
            {p}
          </span>
        ))}
        <ArrowRight size={18} style={{ color: '#9ca3af', flexShrink: 0 }} />
        {['Motivación', 'Inteligencia', 'Creatividad'].map(p => (
          <span key={p} style={{ backgroundColor: '#CDC1FF', borderRadius: 99, padding: '6px 12px', fontSize: 12, fontWeight: 700, color: '#1f2937', fontFamily: "'Nunito', sans-serif", whiteSpace: 'nowrap' }}>
            {p}
          </span>
        ))}
      </div>

      {/* Process blocks */}
      <div className="wiki-grid-3" style={{ gap: 14 }}>
        {blocks.map(({ Icon, title, text, bg }) => (
          <div key={title} style={{ backgroundColor: bg, borderRadius: 18, padding: '18px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Icon size={20} style={{ color: '#374151', flexShrink: 0 }} />
              <h3 style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: '#1f2937' }}>{title}</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13.5, color: '#374151', lineHeight: 1.65, fontFamily: "'Nunito', sans-serif" }}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
