import '../estilos/Secciones.css'

const pesos = [
  { nombre: 'Regular 400', size: '1.2rem', weight: 400, texto: 'Supermercado Máximo' },
  { nombre: 'SemiBold 600', size: '1.3rem', weight: 600, texto: 'Supermercado Máximo' },
  { nombre: 'Bold 700', size: '1.4rem', weight: 700, texto: 'Supermercado Máximo' },
  { nombre: 'ExtraBold 800', size: '1.5rem', weight: 800, texto: 'Supermercado Máximo' },
]

const abecedario = 'A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z'
const minusculas = 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z'
const numeros = '1 2 3 4 5 6 7 8 9 0'

export default function Tipografia() {
  return (
    <section id="tipografia" className="seccion seccion-oscura">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 encabezado-seccion">
            <span className="numero-seccion">05</span>
            <span className="etiqueta-seccion">Tipografía</span>
            <h2>Sistema Tipográfico</h2>
            <div className="linea-deco" />
            <p>
              La tipografía fue seleccionada para comunicar solidez,
              modernidad y la energía de un mercado lleno de vida.
              Se evitaron fuentes de serif para mantener legibilidad
              y frescura en todos los formatos.
            </p>

            <div style={{ marginTop: '2.5rem' }}>
              <div className="tarjeta-fuente" style={{ marginBottom: '1.2rem' }}>
                <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>Syne</h4>
                <span className="uso-recomendado">Títulos y logotipo</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-texto-suave)', lineHeight: 1.7 }}>
                  Disponible en Google Fonts. Se usa en pesos 600,
                  700 y 800. Ideal para titulares grandes, el logotipo
                  y cualquier texto de impacto visual.
                </p>
              </div>
              <div className="tarjeta-fuente">
                <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}>DM Sans</h4>
                <span className="uso-recomendado">Cuerpo de texto</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-texto-suave)', lineHeight: 1.7 }}>
                  Se usa en peso 300 y 400 para párrafos, descripciones
                  y textos de apoyo. Su legibilidad es excelente
                  en tamaños pequeños.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="muestra-tipografia">
              <div className="letra-grande">Aa</div>
              <div className="abecedario" style={{ fontFamily: 'Syne, sans-serif' }}>
                <p>{abecedario}</p>
                <p>{minusculas}</p>
                <p>{numeros}</p>
              </div>
              <div style={{ marginTop: '2rem' }}>
                {pesos.map(p => (
                  <div key={p.nombre} className="fila-peso">
                    <span className="peso-nombre">{p.nombre}</span>
                    <span
                      className="texto-muestra"
                      style={{ fontSize: p.size, fontWeight: p.weight }}
                    >
                      {p.texto}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
