import { BarChart2, ImageIcon } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function CuadroComparativo() {
  return (
    <div>
      <SectionHeader icon={BarChart2} number={2} title="Cuadro Comparativo" subtitle="Motivación, Inteligencia y Creatividad" bg="#FFCCEA" />

      <p style={{ margin: '0 0 20px', fontSize: 14.5, color: '#374151', lineHeight: 1.7, fontFamily: "'Nunito', sans-serif" }}>
        El siguiente cuadro comparativo presenta las principales características de la motivación, la
        inteligencia y la creatividad, resaltando sus diferencias, funciones y la relación que existe entre
        estos procesos psicológicos.
      </p>

      <div>
        <img
          src="/assets/cuadro-comparativo.jpeg"
          alt="Cuadro comparativo"
          style={{ width: '100%', borderRadius: 16, display: 'block' }}
          onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
        />
        <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 16px', border: '2px dashed #CDC1FF', borderRadius: 16, textAlign: 'center', backgroundColor: 'rgba(205,193,255,0.08)' }}>
          <ImageIcon size={36} style={{ color: '#9ca3af', marginBottom: 10 }} />
          <p style={{ margin: '0 0 4px', fontWeight: 700, color: '#6b7280', fontFamily: "'Nunito', sans-serif", fontSize: 14 }}>Cuadro comparativo</p>
          <p style={{ margin: 0, fontSize: 12, color: '#9ca3af', fontFamily: "'Nunito', sans-serif" }}>
            Coloca tu imagen en <code style={{ backgroundColor: '#f3f4f6', padding: '1px 6px', borderRadius: 4 }}>public/assets/cuadro-comparativo.jpeg</code>
          </p>
        </div>
      </div>

      <p style={{ margin: '12px 0 0', fontSize: 12, color: '#9ca3af', textAlign: 'center', fontStyle: 'italic', fontFamily: "'Nunito', sans-serif" }}>
        Cuadro comparativo: Motivación, Inteligencia y Creatividad
      </p>
    </div>
  )
}
