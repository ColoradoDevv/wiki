import { GitBranch, ImageIcon } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function DiagramaFlujo() {
  return (
    <div>
      <SectionHeader icon={GitBranch} number={6} title="Diagrama de Flujo" subtitle="Interacción de los procesos psicológicos" bg="#BFECFF" />

      <p style={{ margin: '0 0 20px', fontSize: 14.5, color: '#374151', lineHeight: 1.7, fontFamily: "'Nunito', sans-serif" }}>
        El siguiente diagrama de flujo representa cómo la motivación, la inteligencia y la creatividad
        interactúan y se complementan en el desarrollo de una tarea cognitiva.
      </p>

      <div>
        <img
          src="/assets/diagrama-flujo.jpeg"
          alt="Diagrama de flujo"
          style={{ width: '100%', borderRadius: 16, display: 'block' }}
          onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
        />
        <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 16px', border: '2px dashed #BFECFF', borderRadius: 16, textAlign: 'center', backgroundColor: 'rgba(191,236,255,0.1)' }}>
          <ImageIcon size={36} style={{ color: '#9ca3af', marginBottom: 10 }} />
          <p style={{ margin: '0 0 4px', fontWeight: 700, color: '#6b7280', fontFamily: "'Nunito', sans-serif", fontSize: 14 }}>Diagrama de flujo</p>
          <p style={{ margin: 0, fontSize: 12, color: '#9ca3af', fontFamily: "'Nunito', sans-serif" }}>
            Coloca tu imagen en <code style={{ backgroundColor: '#f3f4f6', padding: '1px 6px', borderRadius: 4 }}>public/assets/diagrama-flujo.jpeg</code>
          </p>
        </div>
      </div>

      <p style={{ margin: '12px 0 0', fontSize: 12, color: '#9ca3af', textAlign: 'center', fontStyle: 'italic', fontFamily: "'Nunito', sans-serif" }}>
        Diagrama de flujo: Interacción de los procesos psicológicos
      </p>
    </div>
  )
}
