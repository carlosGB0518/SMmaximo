import '../estilos/Secciones.css'

const LogoMiniTono = ({ bg, color1, color2, color3 }) => (
  <div style={{ background: bg, padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
      <div style={{ fontSize: '0.7rem', color: color1, marginBottom: '2px' }}>Supermercado</div>
      <div style={{ fontSize: '1.8rem', color: color2, lineHeight: 1 }}>Máximo</div>
      <div style={{ color: color3, fontSize: '0.8rem', marginTop: '4px' }}>★ ★ ★</div>
    </div>
  </div>
)

export default function TonoContinuo() {
  return (
    <section id="tono" className="seccion seccion-gris">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 encabezado-seccion">
            <span className="numero-seccion">08</span>
            <span className="etiqueta-seccion">Versiones</span>
            <h2>Tono Continuo y Alto Contraste</h2>
            <div className="linea-deco" />
            <p>
              El logotipo cuenta con versiones en tono continuo para
              aplicaciones monocromáticas, y versiones de alto contraste
              para garantizar visibilidad en cualquier soporte o contexto.
            </p>
            <p style={{ color: 'var(--color-texto-suave)', lineHeight: 1.8, marginTop: '1rem' }}>
              Siempre se debe priorizar la versión a color. Solo cuando las
              limitaciones técnicas o del soporte lo exijan, se usarán las
              versiones monocromáticas o de alto contraste.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="row g-4">
              <div className="col-6">
                <div className="tono-card">
                  <div className="tono-header" style={{ background: '#e8f5e9', color: 'var(--color-verde)' }}>
                    ✦ Positivo (Color)
                  </div>
                  <div className="tono-body" style={{ background: '#f9f9f9' }}>
                    <LogoMiniTono bg="var(--color-verde)" color1="rgba(255,255,255,0.6)" color2="#ffffff" color3="#FDD835" />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="tono-card">
                  <div className="tono-header" style={{ background: '#fce4ec', color: '#c62828' }}>
                    ✦ Negativo (Color)
                  </div>
                  <div className="tono-body" style={{ background: '#1a1a1a' }}>
                    <LogoMiniTono bg="#2a2a2a" color1="rgba(255,255,255,0.4)" color2="#66BB6A" color3="#FDD835" />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="tono-card">
                  <div className="tono-header" style={{ background: '#f5f5f5', color: '#333' }}>
                    ✦ Monocromático Oscuro
                  </div>
                  <div className="tono-body" style={{ background: '#ffffff', border: '1px solid #eee' }}>
                    <LogoMiniTono bg="transparent" color1="rgba(0,0,0,0.4)" color2="#1A1A1A" color3="#555" />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="tono-card">
                  <div className="tono-header" style={{ background: '#212121', color: '#aaa' }}>
                    ✦ Monocromático Claro
                  </div>
                  <div className="tono-body" style={{ background: '#1a1a1a' }}>
                    <LogoMiniTono bg="transparent" color1="rgba(255,255,255,0.4)" color2="#ffffff" color3="rgba(255,255,255,0.6)" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
