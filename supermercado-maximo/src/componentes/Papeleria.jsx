import '../estilos/Secciones.css'

export default function Papeleria() {
  return (
    <section id="papeleria" className="seccion">
      <div className="container">
        <div className="row">
          <div className="col-12 encabezado-seccion">
            <span className="numero-seccion">09</span>
            <span className="etiqueta-seccion">Aplicaciones</span>
            <h2>Papelería y Aplicaciones</h2>
            <div className="linea-deco" />
            <p>
              La identidad de Supermercado Máximo se extiende a todos los
              puntos de contacto con el cliente: desde la bolsa de compras
              hasta las comunicaciones digitales.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Tarjeta de presentación */}
          <div className="col-md-6 col-lg-4">
            <div className="papeleria-item">
              <div className="papeleria-preview">
                <div className="tarjeta-presentacion">
                  <span className="tp-sup">SUPERMERCADO</span>
                  <div className="tp-nombre">Máximo</div>
                  <div className="tp-cargo">Gerente de Tienda</div>
                  <span className="tp-dato">📞 +57 300 000 0000</span>
                  <span className="tp-dato">✉ contacto@maximo.co</span>
                  <span className="tp-dato">📍 Barrio El Centro</span>
                </div>
              </div>
              <div className="papeleria-info">
                <h5>Tarjeta de Presentación</h5>
                <p>8.5 × 5.5 cm · Impresión a color · Papel couché 350g</p>
              </div>
            </div>
          </div>

          {/* Carta membretada */}
          <div className="col-md-6 col-lg-4">
            <div className="papeleria-item">
              <div className="papeleria-preview">
                <div className="sobre-carta">
                  <div style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1rem', color: 'var(--color-verde)' }}>
                      Supermercado Máximo
                    </div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--color-texto-suave)' }}>Carta membretada</div>
                  </div>
                  {[100, 100, 100, 100, 60].map((w, i) => (
                    <div key={i} className="lineas-texto" style={{ width: `${w}%` }} />
                  ))}
                </div>
              </div>
              <div className="papeleria-info">
                <h5>Carta Membretada</h5>
                <p>Carta (21.6 × 27.9 cm) · Papel bond 90g · Impresión digital</p>
              </div>
            </div>
          </div>

          {/* Bolsa de compras */}
          <div className="col-md-6 col-lg-4">
            <div className="papeleria-item">
              <div className="papeleria-preview">
                <div className="bolsa-compras">
                  <div className="asa" />
                  <div className="texto-bolsa">Supermercado</div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#FDD835' }}>
                    Máximo
                  </div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '4px' }}>★ ★ ★</div>
                </div>
              </div>
              <div className="papeleria-info">
                <h5>Bolsa de Compras</h5>
                <p>30 × 40 cm · Polipropileno reciclado · Serigrafía a 2 colores</p>
              </div>
            </div>
          </div>

          {/* Etiqueta de precio */}
          <div className="col-md-6 col-lg-4">
            <div className="papeleria-item">
              <div className="papeleria-preview">
                <div style={{
                  background: '#1A1A1A',
                  borderRadius: '8px',
                  padding: '1.2rem',
                  textAlign: 'center',
                  width: '160px',
                }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.7rem', color: '#FDD835', letterSpacing: '0.1em' }}>
                    OFERTA DEL DÍA
                  </div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.8rem', color: '#ffffff', lineHeight: 1 }}>
                    $2.500
                  </div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>
                    Supermercado Máximo
                  </div>
                </div>
              </div>
              <div className="papeleria-info">
                <h5>Etiqueta de Precio</h5>
                <p>8 × 5 cm · Papel adhesivo · Impresión térmica</p>
              </div>
            </div>
          </div>

          {/* Uniforme */}
          <div className="col-md-6 col-lg-4">
            <div className="papeleria-item">
              <div className="papeleria-preview" style={{ background: '#e8f5e9' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '4rem' }}>👕</div>
                  <div style={{
                    background: 'var(--color-verde)',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    marginTop: '0.5rem'
                  }}>
                    MÁXIMO
                  </div>
                </div>
              </div>
              <div className="papeleria-info">
                <h5>Uniforme del Personal</h5>
                <p>Camiseta verde con logo bordado · Tallas S a XXL</p>
              </div>
            </div>
          </div>

          {/* Señalética */}
          <div className="col-md-6 col-lg-4">
            <div className="papeleria-item">
              <div className="papeleria-preview" style={{ background: '#1a1a1a' }}>
                <div style={{
                  border: '3px solid var(--color-amarillo)',
                  borderRadius: '12px',
                  padding: '1.5rem 2rem',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em' }}>
                    SUPERMERCADO
                  </div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#fff', lineHeight: 1 }}>
                    Máximo
                  </div>
                  <div style={{ color: '#FDD835', fontSize: '1rem', marginTop: '4px' }}>★ ★ ★</div>
                </div>
              </div>
              <div className="papeleria-info">
                <h5>Señalética de Fachada</h5>
                <p>120 × 80 cm · Vinilo reflectivo · Retroiluminado LED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
