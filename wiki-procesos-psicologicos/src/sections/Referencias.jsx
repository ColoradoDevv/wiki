import { BookMarked, BookOpen } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const refs = [
  { text: 'Almansa, P. (2012). Qué es el pensamiento creativo. ',                                                               journal: 'Index de Enfermería, 21',                                                                  rest: '(3), 165–168.',  url: 'https://dx.doi.org/10.4321/S1132-12962012000200012' },
  { text: 'Ardila, R. (2011). Inteligencia. ¿Qué sabemos y qué nos falta por investigar? ',                                     journal: 'Revista de la Academia Colombiana de Ciencias Exactas, Físicas y Naturales, 35',             rest: '(134), 97–103.', url: null },
  { text: 'Ballesteros Jiménez, S. (2014). ',                                                                                   journal: 'Habilidades cognitivas básicas: formación y deterioro.',                                     rest: ' UNED.',          url: null },
  { text: 'Duque, M. P. (2014). Pensamiento y lenguaje. El proyecto de Vygotsky. ',                                             journal: 'Tesis Psicológica, 9',                                                                     rest: '(2), 30–57.',    url: null },
  { text: 'Jara, V. (2012). Desarrollo del pensamiento y teorías cognitivas. ',                                                 journal: 'Sophia,',                                                                                  rest: ' (12), 53–66.',  url: null },
  { text: 'López Ortega, B., & Muñoz, S. (2017). ',                                                                            journal: 'Pensamiento, inteligencia y lenguaje.',                                                     rest: ' Reims Ediciones.', url: null },
  { text: 'Montalvo, S. (2025). Generalidades de los procesos psicológicos. UNAD.',                                             journal: null,                                                                                       rest: null,             url: 'https://repository.unad.edu.co/handle/10596/76082' },
]

export default function Referencias() {
  return (
    <div>
      <SectionHeader
        icon={BookMarked}
        number={11}
        title="Referencias Bibliográficas"
        subtitle="Formato APA 7.ª edición"
        bg="#FFCCEA"
      />

      <div style={{ backgroundColor: '#ffffff', borderRadius: 18, padding: '8px 4px', boxShadow: '0 2px 14px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        {refs.map((ref, i) => (
          <div
            key={i}
            style={{ padding: '16px 20px', borderLeft: '4px solid #CDC1FF', marginLeft: 16, marginRight: 16, marginBottom: 12, backgroundColor: '#FFF6E3', borderRadius: '0 12px 12px 0' }}
          >
            <p style={{ margin: 0, fontSize: 13.5, color: '#374151', lineHeight: 1.7, fontFamily: "'Nunito', sans-serif", textIndent: '-1.5em', paddingLeft: '1.5em' }}>
              {ref.text}
              {ref.journal && <em>{ref.journal}</em>}
              {ref.rest}
              {ref.url && (
                <>{' '}<a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: '#9f8fe8', fontWeight: 600, wordBreak: 'break-all', textDecoration: 'none' }} onMouseEnter={e => e.target.style.textDecoration = 'underline'} onMouseLeave={e => e.target.style.textDecoration = 'none'}>{ref.url}</a></>
              )}
            </p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, backgroundColor: '#CDC1FF', borderRadius: 14, padding: '12px 18px', display: 'flex', gap: 8, alignItems: 'center' }}>
        <BookOpen size={16} style={{ color: '#374151', flexShrink: 0 }} />
        <p style={{ margin: 0, fontSize: 12.5, color: '#374151', fontFamily: "'Nunito', sans-serif" }}>
          Referencias citadas según el formato APA 7.ª edición (American Psychological Association).
        </p>
      </div>
    </div>
  )
}
