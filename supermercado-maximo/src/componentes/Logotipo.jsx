import '../estilos/Secciones.css'

const LogoDemo = ({ claseContenedor, color1, color2, color3, etiqueta }) => (
  <div className={`logo-variante ${claseContenedor}`} style={{ flexDirection: 'column', gap: '0.5rem' }}>
    <div className="logo-texto-demo">
      <span className="linea1" style={{ color: color1, fontSize: '0.85rem' }}>Supermercado</span>
      <span className="linea2" style={{ color: color2 }}>Máximo</span>
      <span className="linea3" style={{ color: color3 }}>★ ★ ★</span>
    </div>
    <span className="variante-etiqueta" style={{ color: color3, opacity: 0.5 }}>{etiqueta}</span>
  </div>
)

export default function Logotipo() {
  return (
    <section id="logotipo" className="seccion seccion-gris">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 encabezado-seccion">
            <span className="numero-seccion">03</span>
            <span className="etiqueta-seccion">Identidad Visual</span>
            <h2>Logotipo</h2>
            <div className="linea-deco" />
            <p>
              El logotipo de Supermercado Máximo combina tipografía
              bold con el uso estratégico del color verde, generando
              una identidad sólida, legible y memorable que funciona
              en cualquier soporte.
            </p>
            <p style={{ color: 'var(--color-texto-suave)', lineHeight: 1.8, marginTop: '1rem' }}>
              La tipografía Syne en su peso ExtraBold fue elegida por
              transmitir firmeza y energía. Las estrellas debajo del
              nombre refuerzan la promesa de calidad máxima.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="row g-3">
              <div className="col-6">
                <LogoDemo
                  claseContenedor="logo-variante-primaria"
                  color1="rgba(255,255,255,0.7)"
                  color2="#ffffff"
                  color3="#FDD835"
                  etiqueta="Versión principal"
                />
              </div>
              <div className="col-6">
                <LogoDemo
                  claseContenedor="logo-variante-inversa"
                  color1="rgba(255,255,255,0.5)"
                  color2="#66BB6A"
                  color3="#FDD835"
                  etiqueta="Versión oscura"
                />
              </div>
              <div className="col-6">
                <LogoDemo
                  claseContenedor="logo-variante-amarilla"
                  color1="rgba(0,0,0,0.5)"
                  color2="#1A1A1A"
                  color3="#2E7D32"
                  etiqueta="Versión amarilla"
                />
              </div>
              <div className="col-6">
                <LogoDemo
                  claseContenedor="logo-variante-blanca"
                  color1="rgba(0,0,0,0.4)"
                  color2="#2E7D32"
                  color3="#FDD835"
                  etiqueta="Versión positiva"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
