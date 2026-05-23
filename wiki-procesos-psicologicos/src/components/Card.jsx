export default function Card({ icon: Icon, badge, title, definition, example, bg = '#BFECFF' }) {
  return (
    <div
      className="wiki-card"
      style={{
        backgroundColor: bg, borderRadius: 20,
        position: 'relative', overflow: 'hidden',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
    >
      <div style={{ position: 'absolute', right: -10, top: -10, width: 60, height: 60, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.3)' }} />

      <div style={{ position: 'relative' }}>
        {badge && (
          <span style={{ fontSize: 9, fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b7280', backgroundColor: 'rgba(255,255,255,0.55)', padding: '2px 9px', borderRadius: 99, fontFamily: "'Nunito', sans-serif" }}>
            {badge}
          </span>
        )}
        {Icon && (
          <div style={{ margin: '14px 0 10px' }}>
            <Icon size={30} style={{ color: '#374151' }} />
          </div>
        )}
        <h3 style={{ margin: '0 0 8px', fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: '#1f2937' }}>
          {title}
        </h3>
        <p style={{ margin: '0 0 14px', fontSize: 13.5, color: '#374151', lineHeight: 1.65, fontFamily: "'Nunito', sans-serif" }}>
          {definition}
        </p>
        {example && (
          <div style={{ backgroundColor: 'rgba(255,255,255,0.55)', borderRadius: 12, padding: '10px 14px', borderLeft: '3px solid rgba(255,255,255,0.8)' }}>
            <p style={{ margin: '0 0 4px', fontSize: 9, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b7280', fontFamily: "'Nunito', sans-serif" }}>Ejemplo</p>
            <p style={{ margin: 0, fontSize: 13, color: '#374151', fontStyle: 'italic', lineHeight: 1.6, fontFamily: "'Nunito', sans-serif" }}>{example}</p>
          </div>
        )}
      </div>
    </div>
  )
}
