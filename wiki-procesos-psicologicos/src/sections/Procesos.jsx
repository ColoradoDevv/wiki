import { Brain, Target, Sparkles } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'

export default function Procesos() {
  return (
    <div>
      <SectionHeader icon={Brain} number={1} title="Procesos a Analizar" subtitle="Motivación, Inteligencia y Creatividad" bg="#CDC1FF" />

      <div className="wiki-grid-3" style={{ gap: 16 }}>
        <Card
          icon={Target} badge="Proceso Activador de Conducta" title="Motivación" bg="#BFECFF"
          definition="La motivación es aquello que impulsa a las personas a actuar y perseguir objetivos. Gracias a ella, las personas encuentran razones para esforzarse, aprender y superar dificultades. Este proceso influye en la constancia, el interés y el deseo de alcanzar metas personales, escolares o laborales."
          example="Una deportista es perseverante, disciplinada y organizada con sus entrenamientos para alcanzar su meta de representar a su país en los Juegos Olímpicos."
        />
        <Card
          icon={Brain} badge="Proceso Psicológico Superior" title="Inteligencia" bg="#CDC1FF"
          definition="La inteligencia permite comprender situaciones, aprender de las experiencias y resolver problemas de manera adecuada. Este proceso ayuda a las personas a adaptarse al entorno, tomar decisiones y analizar diferentes alternativas frente a los retos de la vida diaria."
          example="La deportista analiza los pendientes de la semana y, sin dejar de cumplir ningún compromiso, crea un cronograma para tener organizada su semana."
        />
        <Card
          icon={Sparkles} badge="Proceso Psicológico Superior" title="Creatividad" bg="#FFCCEA"
          definition="La creatividad permite desarrollar ideas originales y encontrar soluciones a diferentes problemas. Gracias a este proceso, las personas pueden innovar, expresarse y adaptarse de forma flexible a nuevas situaciones."
          example="La deportista planea rutinas de patinaje en hielo nuevas e innovadoras para llamar la atención del jurado y recibir una mejor puntuación."
        />
      </div>
    </div>
  )
}
