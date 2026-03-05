import '../estilos/Secciones.css'

const valores = [
  { emoji: '🌿', label: 'Frescura' },
  { emoji: '🏡', label: 'Cercanía' },
  { emoji: '❤️', label: 'Confianza' },
  { emoji: '💰', label: 'Buen Precio' },
  { emoji: '🌾', label: 'Calidad' },
  { emoji: '🤝', label: 'Comunidad' },
]

export default function LaMarca() {
  return (
    <section id="la-marca" className="seccion seccion-crema">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="encabezado-seccion">
              <span className="numero-seccion">01</span>
              <span className="etiqueta-seccion">Identidad</span>
              <h2>La Marca</h2>
              <div className="linea-deco" />
              <p>
                Supermercado Máximo es el mercado del barrio de toda la vida.
                Ofrecemos los productos de la canasta familiar que las familias
                colombianas necesitan a diario, con la cercanía y el trato
                cálido que solo un vecino puede brindar.
              </p>
            </div>
            <p style={{ color: 'var(--color-texto-suave)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Nuestra misión es garantizar acceso a productos frescos,
              económicos y de calidad, siendo el punto de encuentro de
              la comunidad. Nos apasiona servir con honestidad y poner
              el bienestar de nuestros clientes por encima de todo.
            </p>
            <div>
              {valores.map(v => (
                <span key={v.label} className="valor-chip">
                  {v.emoji} {v.label}
                </span>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="imagen-mercado">
              <span className="emoji-grande">🛒</span>
              <h3>El mercado de tu barrio</h3>
              <p>Canasta familiar · Productos frescos · Precios justos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
