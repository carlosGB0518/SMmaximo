import '../estilos/Secciones.css'

const PatronFondo = ({ bg, colorLogo }) => (
  <div style={{
    background: bg,
    borderRadius: '16px',
    padding: '2rem',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    {/* Patrón repetido */}
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '8px',
      padding: '12px',
      opacity: 0.35,
    }}>
      {Array.from({ length: 24 }).map((_, i) => (
        <div key={i} style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: '0.7rem',
          color: colorLogo,
          textAlign: 'center',
          lineHeight: 1.2,
        }}>
          <div style={{ fontSize: '0.65rem', opacity: 0.7 }}>SM</div>
          <div style={{ fontSize: '0.9rem' }}>★</div>
        </div>
      ))}
    </div>
    {/* Logo central */}
    <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, color: colorLogo }}>
        <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Supermercado</div>
        <div style={{ fontSize: '2rem', lineHeight: 1 }}>Máximo</div>
        <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>★ ★ ★</div>
      </div>
    </div>
  </div>
)

export default function PatronTextural() {
  return (
    <section id="patron" className="seccion seccion-verde">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 encabezado-seccion">
            <span className="numero-seccion">10</span>
            <span className="etiqueta-seccion">Recursos</span>
            <h2>Patrón Textural</h2>
            <div className="linea-deco" />
            <p>
              El patrón de marca de Supermercado Máximo utiliza el ícono
              de estrella y las iniciales SM dispuestos en una retícula
              uniforme, creando una textura dinámica y reconocible.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginTop: '1rem' }}>
              Este patrón puede aplicarse en fondos de empaques, bolsas,
              materiales de punto de venta, fondos de pantallas digitales
              y cualquier superficie que requiera identidad de marca
              sin usar el logotipo completo.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '1.2rem 1.5rem',
                marginBottom: '0.8rem'
              }}>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>
                  <strong style={{ color: '#FDD835' }}>✓</strong> Usar en empaques de producto
                </p>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '1.2rem 1.5rem',
                marginBottom: '0.8rem'
              }}>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>
                  <strong style={{ color: '#FDD835' }}>✓</strong> Fondos digitales y banners
                </p>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '1.2rem 1.5rem',
              }}>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>
                  <strong style={{ color: '#FDD835' }}>✓</strong> Materiales de punto de venta
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row g-4">
              <div className="col-6">
                <PatronFondo bg="#2E7D32" colorLogo="#ffffff" />
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textAlign: 'center', marginTop: '0.6rem' }}>
                  Patrón sobre verde
                </p>
              </div>
              <div className="col-6">
                <PatronFondo bg="#1A1A1A" colorLogo="#66BB6A" />
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textAlign: 'center', marginTop: '0.6rem' }}>
                  Patrón sobre oscuro
                </p>
              </div>
              <div className="col-6">
                <PatronFondo bg="#FDD835" colorLogo="#1A1A1A" />
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textAlign: 'center', marginTop: '0.6rem' }}>
                  Patrón sobre amarillo
                </p>
              </div>
              <div className="col-6">
                <PatronFondo bg="#ffffff" colorLogo="#2E7D32" />
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textAlign: 'center', marginTop: '0.6rem' }}>
                  Patrón sobre blanco
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
