import { PenLine } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function Reflexion() {
  return (
    <div>
      <SectionHeader
        icon={PenLine}
        number={8}
        title="Manuscrito Reflexión"
        subtitle="Reflexión escrita a puño y letra"
        bg="#FFCCEA"
      />

      <p style={{ margin: '0 0 20px', fontSize: 14.5, color: '#374151', lineHeight: 1.7, fontFamily: "'Nunito', sans-serif" }}>
        A continuación se presenta la reflexión personal sobre los procesos psicológicos estudiados,
        escrita a mano.
      </p>



      {/* PDF viewer with decorative frame */}
      <div style={{
        padding: 10,
        backgroundColor: '#FFCCEA',
        borderRadius: 22,
        marginBottom: 12,
        boxShadow: '0 4px 20px rgba(240,144,197,0.2)',
      }}>
        <iframe
          src="/assets/OURSTUDYBEGINS.pdf"
          title="Reflexión manuscrita"
          style={{
            width: '100%',
            height: 620,
            border: 'none',
            borderRadius: 14,
            display: 'block',
            backgroundColor: '#ffffff',
          }}
        />
      </div>

      <p style={{ margin: '0 0 20px', fontSize: 14.5, color: '#9ca3af', lineHeight: 1.7, fontFamily: "'Nunito', sans-serif" }}>
        El siguiente texto reflexivo fue elaborado a mano, con el fin de expresar la importancia de estudiar los procesos psicológicos de la motivación, la inteligencia y la creatividad dentro de la formación profesional en Psicología.
      </p>
    </div>
  )
}
