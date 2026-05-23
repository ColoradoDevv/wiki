export default function SectionHeader({ icon: Icon, number, title, subtitle, bg = '#CDC1FF' }) {
  return (
    <div className="wiki-sh" style={{
      position: 'relative', overflow: 'hidden',
      backgroundColor: bg, borderRadius: 20,
    }}>
      <div style={{ position: 'absolute', right: -16, top: -16, width: 80, height: 80, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.25)' }} />
      <div style={{ position: 'absolute', right: 24, bottom: -8, width: 36, height: 36, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.15)' }} />

      <div style={{ position: 'relative' }}>
        {number !== undefined && (
          <span className="wiki-sh-num" style={{
            display: 'inline-block', fontWeight: 900, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#6b7280',
            backgroundColor: 'rgba(255,255,255,0.45)', padding: '3px 10px',
            borderRadius: 99, marginBottom: 10, fontFamily: "'Nunito', sans-serif",
          }}>
            Sección {number}
          </span>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {Icon && (
            <div style={{
              width: 42, height: 42, backgroundColor: 'rgba(255,255,255,0.45)',
              borderRadius: 12, display: 'flex', alignItems: 'center',
              justifyContent: 'center', flexShrink: 0,
            }}>
              <Icon size={20} style={{ color: '#374151' }} />
            </div>
          )}
          <div>
            <h2 className="wiki-sh-title" style={{
              margin: 0, fontFamily: "'Playfair Display', serif",
              fontWeight: 800, color: '#1f2937', lineHeight: 1.2,
            }}>
              {title}
            </h2>
            {subtitle && (
              <p style={{ margin: '4px 0 0', fontSize: 13, color: '#6b7280', fontFamily: "'Nunito', sans-serif" }}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
