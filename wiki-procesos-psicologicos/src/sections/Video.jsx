import { Play, Info } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function Video() {
  return (
    <div>
      <SectionHeader
        icon={Play}
        number={7}
        title="Video Explicativo"
        subtitle="Video de elaboración propia"
        bg="#CDC1FF"
      />

      <p style={{ margin: '0 0 20px', fontSize: 14.5, color: '#374151', lineHeight: 1.7, fontFamily: "'Nunito', sans-serif" }}>
        El siguiente video explica de manera visual los procesos psicológicos analizados en esta wiki:
        la motivación, la inteligencia y la creatividad.
      </p>

      {/* Local video player */}
      <div style={{ borderRadius: 18, overflow: 'hidden', marginBottom: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.12)', backgroundColor: '#1f2937' }}>
        <video
          controls
          style={{ width: '100%', display: 'block', maxHeight: '520px' }}
        >
          {/* Cambia el nombre del archivo si es necesario */}
          <source src="/assets/WhatsApp%20Video%202026-05-22%20at%208.08.59%20PM.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>

      <p style={{ margin: '0 0 16px', fontSize: 12, color: '#9ca3af', textAlign: 'center', fontStyle: 'italic', fontFamily: "'Nunito', sans-serif" }}>
        Video de elaboración propia — Procesos Psicológicos
      </p>

    </div>
  )
}
