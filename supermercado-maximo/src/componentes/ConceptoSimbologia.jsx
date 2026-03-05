import '../estilos/Secciones.css'

const palabrasClave = [
  {
    letra: 'M',
    nombre: 'Máximo',
    desc: 'La promesa de ofrecer siempre lo mejor, sin límites para el cliente.',
  },
  {
    letra: '🌿',
    nombre: 'Frescura',
    desc: 'Productos de calidad que llegan directamente al hogar colombiano.',
  },
  {
    letra: '🏡',
    nombre: 'Barrio',
    desc: 'Arraigo comunitario. El supermercado que conoce a su gente.',
  },
]

export default function ConceptoSimbologia() {
  return (
    <section id="concepto" className="seccion">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center encabezado-seccion">
            <span className="numero-seccion">02</span>
            <span className="etiqueta-seccion">Concepto</span>
            <h2>Concepto y Simbología</h2>
            <div className="linea-deco mx-auto" />
            <p className="mx-auto">
              El nombre <strong>Máximo</strong> evoca la promesa de la marca:
              dar siempre lo máximo al cliente. El logotipo nace de la
              combinación de elementos que representan abundancia, frescura
              y la energía del barrio.
            </p>
          </div>
        </div>

        <div className="row g-4 mt-3">
          {palabrasClave.map(p => (
            <div key={p.nombre} className="col-md-4">
              <div className="concepto-palabra">
                <span className="letra">{p.letra}</span>
                <p className="concepto-nombre">{p.nombre}</p>
                <p className="concepto-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5 g-4">
          <div className="col-lg-6">
            <div className="tarjeta borde-verde">
              <h4 style={{ marginBottom: '1rem', fontFamily: 'var(--fuente-titulo)' }}>
                El Símbolo ★
              </h4>
              <p style={{ color: 'var(--color-texto-suave)', lineHeight: 1.8 }}>
                La estrella presente en el logotipo simboliza la excelencia
                y el máximo nivel de servicio. También evoca el sello de
                calidad que cada producto Máximo lleva: seleccionado con
                cuidado para la canasta de cada familia.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tarjeta borde-verde">
              <h4 style={{ marginBottom: '1rem', fontFamily: 'var(--fuente-titulo)' }}>
                El Color Verde 🌿
              </h4>
              <p style={{ color: 'var(--color-texto-suave)', lineHeight: 1.8 }}>
                El verde como color principal evoca naturaleza, frescura y
                confianza. Es el color de los vegetales, las frutas y todo
                lo que nutre a las familias. Transmite honestidad y
                compromiso con productos saludables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
