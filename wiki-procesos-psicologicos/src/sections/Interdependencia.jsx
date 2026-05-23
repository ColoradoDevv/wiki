import { Link2, Target, Brain, Sparkles, Lightbulb } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const blocks = [
  { Icon: Target,   title: 'Motivación',   role: 'Impulso',    description: 'Actúa como el impulso que lleva a la persona a iniciar, mantener y dirigir una acción hacia una meta determinada.', bg: '#BFECFF', border: '#8dc8ee' },
  { Icon: Brain,    title: 'Inteligencia', role: 'Estrategia', description: 'Permite analizar información, comprender situaciones, resolver problemas y tomar decisiones adecuadas para cumplir la tarea.', bg: '#CDC1FF', border: '#9f8fe8' },
  { Icon: Sparkles, title: 'Creatividad',  role: 'Innovación', description: 'Favorece la generación de ideas nuevas, originales y útiles frente a diferentes desafíos o formas de realizar una tarea.', bg: '#FFCCEA', border: '#f090c5' },
]

export default function Interdependencia() {
  return (
    <div>
      <SectionHeader icon={Link2} number={4} title="Interdependencia de los Procesos" subtitle="Relación entre motivación, inteligencia y creatividad" bg="#CDC1FF" />

      <div className="wiki-text-block" style={{ backgroundColor: '#ffffff', borderRadius: 18, marginBottom: 22, boxShadow: '0 2px 14px rgba(0,0,0,0.05)' }}>
        <p style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.75, fontFamily: "'Nunito', sans-serif" }}>
          Los procesos psicológicos de motivación, inteligencia y creatividad mantienen una <strong>relación
          interdependiente</strong>, ya que trabajan de manera conjunta para orientar y facilitar la conducta humana.
          Estos procesos no funcionan por separado, sino que se complementan constantemente. Cuando uno de estos
          procesos falla o disminuye, el desempeño general también puede verse afectado.
        </p>
      </div>

      <div className="wiki-grid-3" style={{ gap: 14, marginBottom: 22 }}>
        {blocks.map(({ Icon, title, role, description, bg, border }) => (
          <div key={title} style={{ backgroundColor: bg, borderRadius: 18, padding: '18px 16px', borderTop: `4px solid ${border}` }}>
            <Icon size={26} style={{ color: '#374151', marginBottom: 10 }} />
            <span style={{ display: 'inline-block', fontSize: 9, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6b7280', backgroundColor: 'rgba(255,255,255,0.55)', padding: '2px 9px', borderRadius: 99, marginBottom: 8, fontFamily: "'Nunito', sans-serif" }}>
              {role}
            </span>
            <h3 style={{ margin: '0 0 8px', fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#1f2937' }}>{title}</h3>
            <p style={{ margin: 0, fontSize: 13.5, color: '#374151', lineHeight: 1.65, fontFamily: "'Nunito', sans-serif" }}>{description}</p>
          </div>
        ))}
      </div>

      <div style={{ backgroundColor: '#CDC1FF', borderRadius: 18, padding: '18px 20px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <Lightbulb size={20} style={{ color: '#374151', flexShrink: 0, marginTop: 2 }} />
        <div>
          <p style={{ margin: '0 0 6px', fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: '#1f2937' }}>La clave está en la integración</p>
          <p style={{ margin: 0, fontSize: 13.5, color: '#374151', lineHeight: 1.65, fontFamily: "'Nunito', sans-serif" }}>
            La motivación influye en el nivel de esfuerzo y persistencia; la inteligencia ayuda a comprender y desarrollar
            estrategias para cumplirla; y la creatividad permite encontrar soluciones innovadoras o diferentes maneras de
            realizarla. Los tres procesos son inseparables en el desempeño humano.
          </p>
        </div>
      </div>
    </div>
  )
}
