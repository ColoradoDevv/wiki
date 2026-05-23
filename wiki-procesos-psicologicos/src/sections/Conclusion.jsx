import { CircleCheck, Target, Brain, Sparkles, GraduationCap, MessageCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const takeaways = [
  { Icon: Target,   title: 'Motivación',   idea: 'Sin motivación no hay acción. Es el motor que inicia y sostiene cualquier conducta hacia una meta.' },
  { Icon: Brain,    title: 'Inteligencia', idea: 'La inteligencia transforma el impulso en estrategia, permitiendo analizar, decidir y adaptarse.' },
  { Icon: Sparkles, title: 'Creatividad',  idea: 'La creatividad aporta innovación, haciendo únicas las soluciones que emergen del esfuerzo inteligente.' },
]

export default function Conclusion() {
  return (
    <div>
      <SectionHeader icon={CircleCheck} number={10} title="Conclusión" bg="#CDC1FF" />

      {/* Main conclusion block */}
      <div style={{ backgroundColor: '#CDC1FF', borderRadius: 20, padding: '24px 22px', marginBottom: 18, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -20, bottom: -20, width: 100, height: 100, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)' }} />
        <div style={{ position: 'absolute', left: -10, top: -10, width: 60, height: 60, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.15)' }} />
        <div style={{ position: 'relative' }}>
          <MessageCircle size={28} style={{ color: '#374151', marginBottom: 12 }} />
          <p style={{ margin: 0, fontSize: 15, color: '#1f2937', lineHeight: 1.8, fontFamily: "'Nunito', sans-serif" }}>
            La motivación, la inteligencia y la creatividad son procesos psicológicos fundamentales que trabajan
            de manera integrada en la conducta humana. Comprender su funcionamiento permite analizar cómo las
            personas aprenden, resuelven problemas y alcanzan sus objetivos, siendo un conocimiento esencial en
            la formación profesional del psicólogo.
          </p>
        </div>
      </div>

      {/* Key takeaways */}
      <div className="wiki-grid-3" style={{ gap: 12, marginBottom: 18 }}>
        {takeaways.map(({ Icon, title, idea }) => (
          <div key={title} style={{ backgroundColor: '#ffffff', borderRadius: 16, padding: '16px 14px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', borderTop: '3px solid #CDC1FF' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <Icon size={17} style={{ color: '#374151', flexShrink: 0 }} />
              <h4 style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontSize: 14, fontWeight: 700, color: '#1f2937' }}>{title}</h4>
            </div>
            <p style={{ margin: 0, fontSize: 13, color: '#6b7280', lineHeight: 1.6, fontFamily: "'Nunito', sans-serif" }}>{idea}</p>
          </div>
        ))}
      </div>

      {/* Final badge */}
      <div style={{ textAlign: 'center', padding: '14px 16px', backgroundColor: '#FFF6E3', borderRadius: 14, border: '2px dashed #CDC1FF', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
        <GraduationCap size={16} style={{ color: '#6b7280', flexShrink: 0 }} />
        <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#6b7280', fontFamily: "'Nunito', sans-serif" }}>
          Wiki elaborada para el curso de Procesos Psicológicos · UNAD · 2026
        </p>
      </div>
    </div>
  )
}
