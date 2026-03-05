import '../estilos/Secciones.css'

const tamanos = [
  { px: '200px+', uso: 'Uso principal, impresión y digital', color: 'var(--color-verde)' },
  { px: '< 200px', uso: 'Íconos de redes sociales', color: 'var(--color-amarillo)', textColor: '#333' },
  { px: '< 70px', uso: 'Favicon y miniaturas', color: 'var(--color-rojo)' },
]

export default function TamanoAreaReserva() {
  return (
    <section id="tamano" className="seccion seccion-crema">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 encabezado-seccion">
            <span className="numero-seccion">06</span>
            <span className="etiqueta-seccion">Planimetría</span>
            <h2>Tamaño y Área de Reserva</h2>
            <div className="linea-deco" />
            <p>
              El área de reserva es el espacio mínimo que debe mantenerse
              alrededor del logotipo. En Máximo, este espacio equivale a
              la altura de la letra <strong>M</strong> del logotipo.
            </p>
            <p style={{ color: 'var(--color-texto-suave)', marginTop: '1rem', lineHeight: 1.8 }}>
              Para usos en tamaños reducidos como iconos de redes sociales
              o favicon, se debe utilizar únicamente el ícono de estrella
              con la letra M para mantener legibilidad y coherencia visual.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="area-reserva-demo mb-4">
              <p style={{ fontSize: '0.8rem', color: 'var(--color-texto-suave)', marginBottom: '1.5rem', textAlign: 'left' }}>
                Área mínima de reserva = altura de la letra M
              </p>
              <div className="logo-con-guias">
                <div style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  padding: '1rem 2rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-texto-suave)' }}>Supermercado</div>
                  <div style={{ fontSize: '2.2rem', color: 'var(--color-verde)', lineHeight: 1 }}>Máximo</div>
                  <div style={{ color: 'var(--color-amarillo)', fontSize: '1rem', marginTop: '4px' }}>★ ★ ★</div>
                </div>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#aaa', marginTop: '1rem' }}>
                Las guías punteadas indican el área mínima de reserva
              </p>
            </div>

            <div className="row g-3">
              {tamanos.map(t => (
                <div key={t.px} className="col-4">
                  <div className="tamano-chip">
                    <span className="px" style={{ color: t.color }}>{t.px}</span>
                    <p className="uso">{t.uso}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
