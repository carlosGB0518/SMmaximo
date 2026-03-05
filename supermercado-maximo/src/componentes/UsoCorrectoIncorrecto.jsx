import '../estilos/Secciones.css'

const correctos = [
  { desc: 'Logo sobre fondo verde corporativo', bg: '#2E7D32', color1: '#fff', color2: '#fff', color3: '#FDD835' },
  { desc: 'Logo sobre fondo oscuro', bg: '#1A1A1A', color1: 'rgba(255,255,255,0.6)', color2: '#66BB6A', color3: '#FDD835' },
  { desc: 'Logo sobre fondo blanco', bg: '#ffffff', color1: 'rgba(0,0,0,0.4)', color2: '#2E7D32', color3: '#FDD835', borde: '1px solid #eee' },
  { desc: 'Logo sobre fondo amarillo', bg: '#FDD835', color1: 'rgba(0,0,0,0.5)', color2: '#1A1A1A', color3: '#2E7D32' },
]

const incorrectos = [
  { desc: 'No usar sobre fondos de bajo contraste', bg: '#cccccc', tachado: true },
  { desc: 'No distorsionar ni estirar el logo', bg: '#2E7D32', estirado: true },
  { desc: 'No usar colores no autorizados', bg: '#9C27B0', color2: '#FF5722' },
  { desc: 'No añadir sombras o efectos al logo', bg: '#ffffff', sombra: true, borde: '1px solid #eee' },
]

const LogoMini = ({ color1 = 'rgba(255,255,255,0.5)', color2 = '#fff', color3 = '#FDD835', sombra, estirado }) => (
  <div style={{
    fontFamily: 'Syne, sans-serif',
    fontWeight: 800,
    textAlign: 'center',
    transform: estirado ? 'scaleX(1.6)' : 'none',
    filter: sombra ? 'drop-shadow(4px 4px 8px rgba(0,0,0,0.5))' : 'none',
  }}>
    <div style={{ fontSize: '0.75rem', color: color1 }}>Supermercado</div>
    <div style={{ fontSize: '1.6rem', color: color2, lineHeight: 1 }}>Máximo</div>
    <div style={{ color: color3, fontSize: '0.75rem', marginTop: '2px' }}>★ ★ ★</div>
  </div>
)

export default function UsoCorrectoIncorrecto() {
  return (
    <section id="uso" className="seccion">
      <div className="container">
        <div className="row">
          <div className="col-12 encabezado-seccion">
            <span className="numero-seccion">07</span>
            <span className="etiqueta-seccion">Aplicaciones</span>
            <h2>Uso Correcto e Incorrecto</h2>
            <div className="linea-deco" />
            <p>
              Para mantener la integridad visual de la marca, es fundamental
              respetar las normas de aplicación del logotipo. Aquí se muestran
              los usos permitidos y los que deben evitarse.
            </p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-12">
            <h5 style={{ fontFamily: 'var(--fuente-titulo)', color: 'var(--color-verde)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              ✅ Usos Correctos
            </h5>
          </div>
          {correctos.map((c, i) => (
            <div key={i} className="col-md-6 col-lg-3">
              <div className="uso-card uso-correcto">
                <div className="uso-card-header">✅ Correcto</div>
                <div className="uso-card-body" style={{ background: c.bg, border: c.borde }}>
                  <LogoMini color1={c.color1} color2={c.color2} color3={c.color3} />
                </div>
                <div className="uso-card-desc">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4">
          <div className="col-12">
            <h5 style={{ fontFamily: 'var(--fuente-titulo)', color: 'var(--color-rojo)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              ❌ Usos Incorrectos
            </h5>
          </div>
          {incorrectos.map((c, i) => (
            <div key={i} className="col-md-6 col-lg-3">
              <div className="uso-card uso-incorrecto">
                <div className="uso-card-header">❌ Incorrecto</div>
                <div className="uso-card-body" style={{ background: c.bg, border: c.borde }}>
                  <LogoMini color2={c.color2 || '#fff'} sombra={c.sombra} estirado={c.estirado} />
                </div>
                <div className="uso-card-desc">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
