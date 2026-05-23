import { useState } from 'react'
import { HelpCircle, ChevronRight, RotateCcw, Trophy, ThumbsUp, Star, TrendingUp, CircleCheck, X } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const QUESTIONS = [
  { q: '¿Cuál de los siguientes es un proceso psicológico básico?',                                       opts: ['Inteligencia', 'Creatividad', 'Atención', 'Motivación'],                                                                                                                              ans: 2 },
  { q: '¿Qué proceso psicológico actúa como impulsor de la conducta humana?',                             opts: ['Percepción', 'Motivación', 'Memoria', 'Lenguaje'],                                                                                                                                    ans: 1 },
  { q: '¿Cuál de los siguientes se considera un proceso psicológico superior?',                           opts: ['Sensación', 'Atención', 'Inteligencia', 'Percepción'],                                                                                                                                ans: 2 },
  { q: '¿Qué proceso permite almacenar y recuperar información?',                                         opts: ['Memoria', 'Creatividad', 'Motivación', 'Emoción'],                                                                                                                                    ans: 0 },
  { q: '¿Qué proceso ayuda a generar ideas nuevas y originales?',                                         opts: ['Aprendizaje', 'Atención', 'Creatividad', 'Sensación'],                                                                                                                                ans: 2 },
  { q: '¿Cuál es la función principal de la percepción?',                                                 opts: ['Crear emociones', 'Interpretar estímulos del entorno', 'Resolver problemas', 'Mantener la motivación'],                                                                               ans: 1 },
  { q: '¿Cómo se relacionan los procesos psicológicos básicos y superiores?',                             opts: ['Funcionan de manera independiente', 'Los básicos sirven de base para los superiores', 'Los superiores reemplazan a los básicos', 'No tienen relación entre sí'],                     ans: 1 },
  { q: '¿Qué proceso superior permite resolver problemas y adaptarse a nuevas situaciones?',              opts: ['Sensación', 'Percepción', 'Inteligencia', 'Atención'],                                                                                                                                ans: 2 },
  { q: 'En una exposición académica, ¿qué proceso impulsa al estudiante a prepararse y cumplir su meta?', opts: ['Memoria', 'Motivación', 'Sensación', 'Percepción'],                                                                                                                                  ans: 1 },
  { q: '¿Por qué es importante estudiar los procesos psicológicos en la formación de un psicólogo?',      opts: ['Porque ayudan a comprender el comportamiento humano', 'Porque reemplazan la experiencia profesional', 'Porque solo sirven en la educación', 'Porque evitan las emociones'],          ans: 0 },
]

const LABELS = ['A', 'B', 'C', 'D']

function getScoreData(score) {
  if (score >= 9) return { msg: '¡Excelente! Dominas los procesos psicológicos.', Icon: Trophy,    bg: '#BFECFF' }
  if (score >= 7) return { msg: '¡Muy bien! Tienes un sólido conocimiento.',      Icon: ThumbsUp,  bg: '#CDC1FF' }
  if (score >= 5) return { msg: '¡Bien! Repasa algunos conceptos.',               Icon: Star,      bg: '#FFCCEA' }
  return           { msg: '¡Sigue practicando! Revisa el material.',               Icon: TrendingUp, bg: '#BFECFF' }
}

export default function Trivia() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = QUESTIONS[current]

  function handleAnswer(idx) {
    if (selected !== null) return
    setSelected(idx)
    if (idx === q.ans) setScore(s => s + 1)
  }

  function handleNext() {
    if (current + 1 >= QUESTIONS.length) {
      setFinished(true)
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
    }
  }

  function handleReset() {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    const { msg, Icon, bg } = getScoreData(score)
    return (
      <div>
        <SectionHeader icon={HelpCircle} number={9} title="Trivia Interactiva" bg="#BFECFF" />
        <div style={{ textAlign: 'center' }}>
          <div style={{ backgroundColor: bg, borderRadius: 24, padding: '40px 28px', marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
              <Icon size={52} style={{ color: '#374151' }} />
            </div>
            <Trophy size={28} style={{ color: '#374151', marginBottom: 10 }} />
            <h3 style={{ margin: '0 0 8px', fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 800, color: '#1f2937' }}>
              ¡Trivia completada!
            </h3>
            <div style={{ fontSize: 52, fontWeight: 900, color: '#1f2937', fontFamily: "'Playfair Display', serif", margin: '16px 0 8px' }}>
              {score}<span style={{ fontSize: 28, color: '#6b7280', fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>/10</span>
            </div>
            <p style={{ margin: '0 0 20px', fontSize: 16, color: '#374151', fontFamily: "'Nunito', sans-serif" }}>{msg}</p>
            <button
              onClick={handleReset}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                backgroundColor: '#1f2937', color: '#f9fafb',
                border: 'none', borderRadius: 12,
                padding: '12px 24px', fontSize: 14, fontWeight: 700,
                cursor: 'pointer', fontFamily: "'Nunito', sans-serif",
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <RotateCcw size={16} /> Volver a intentar
            </button>
          </div>
        </div>
      </div>
    )
  }

  const progress = (current / QUESTIONS.length) * 100

  return (
    <div>
      <SectionHeader
        icon={HelpCircle}
        number={9}
        title="Trivia Interactiva"
        subtitle="Pon a prueba tu conocimiento sobre procesos psicológicos"
        bg="#BFECFF"
      />

      {/* Progress */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', fontFamily: "'Nunito', sans-serif" }}>
            Pregunta {current + 1} de {QUESTIONS.length}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 700, color: '#16a34a', fontFamily: "'Nunito', sans-serif" }}>
            <CircleCheck size={13} /> {score} correctas
          </span>
        </div>
        <div style={{ height: 8, backgroundColor: '#e5e7eb', borderRadius: 99, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progress}%`, backgroundColor: '#BFECFF', borderRadius: 99, transition: 'width 0.4s ease', border: '1px solid #8dc8ee' }} />
        </div>
      </div>

      {/* Question card */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: 18, padding: '22px 22px', marginBottom: 16, boxShadow: '0 2px 14px rgba(0,0,0,0.05)' }}>
        <p style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: '#1f2937', lineHeight: 1.5 }}>
          {q.q}
        </p>
      </div>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
        {q.opts.map((opt, idx) => {
          let bg = '#ffffff', border = '#e5e7eb', color = '#374151', cursor = 'pointer'

          if (selected !== null) {
            if (idx === q.ans)                              { bg = '#dcfce7'; border = '#86efac'; color = '#166534' }
            else if (idx === selected && selected !== q.ans) { bg = '#fee2e2'; border = '#fca5a5'; color = '#991b1b' }
            else                                            { bg = '#f9fafb'; color = '#9ca3af' }
            cursor = 'default'
          }

          return (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', backgroundColor: bg, border: `2px solid ${border}`, borderRadius: 14, cursor, textAlign: 'left', transition: 'all 0.2s ease', fontFamily: "'Nunito', sans-serif" }}
              onMouseEnter={e => { if (selected === null) { e.currentTarget.style.borderColor = '#CDC1FF'; e.currentTarget.style.backgroundColor = '#f5f3ff' } }}
              onMouseLeave={e => { if (selected === null) { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.backgroundColor = '#ffffff' } }}
            >
              <span style={{ width: 30, height: 30, borderRadius: '50%', backgroundColor: selected !== null ? 'transparent' : '#f3f4f6', border: selected !== null ? 'none' : '2px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 900, color: '#6b7280', flexShrink: 0, fontFamily: "'Nunito', sans-serif" }}>
                {LABELS[idx]}
              </span>
              <span style={{ fontSize: 14, fontWeight: 600, color, lineHeight: 1.5, flex: 1 }}>{opt}</span>
              {selected !== null && idx === q.ans            && <CircleCheck size={18} style={{ marginLeft: 'auto', color: '#16a34a', flexShrink: 0 }} />}
              {selected !== null && idx === selected && selected !== q.ans && <X size={18} style={{ marginLeft: 'auto', color: '#dc2626', flexShrink: 0 }} />}
            </button>
          )
        })}
      </div>

      {/* Next button */}
      {selected !== null && (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={handleNext}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#CDC1FF', color: '#1f2937', border: 'none', borderRadius: 12, padding: '12px 22px', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: "'Nunito', sans-serif", transition: 'all 0.2s ease', boxShadow: '0 2px 8px rgba(205,193,255,0.4)' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b5a8f5'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#CDC1FF'}
          >
            {current + 1 >= QUESTIONS.length ? 'Ver Resultados' : 'Siguiente pregunta'}
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  )
}
