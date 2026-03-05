import '../estilos/Secciones.css'

const colores = [
  {
    nombre: 'Verde Principal',
    hex: '#2E7D32',
    rgb: '46, 125, 50',
    cmyk: '63, 0, 60, 51',
    pantone: 'Pantone 363 C',
    uso: 'Color primario de marca. Fondo principal, botones, encabezados.',
  },
  {
    nombre: 'Verde Claro',
    hex: '#66BB6A',
    rgb: '102, 187, 106',
    cmyk: '45, 0, 43, 27',
    pantone: 'Pantone 360 C',
    uso: 'Acentos, degradados, elementos secundarios.',
  },
  {
    nombre: 'Amarillo Sol',
    hex: '#FDD835',
    rgb: '253, 216, 53',
    cmyk: '0, 15, 79, 1',
    pantone: 'Pantone 108 C',
    uso: 'Acento de marca, íconos de calidad, llamados a la acción.',
  },
  {
    nombre: 'Rojo Energía',
    hex: '#E53935',
    rgb: '229, 57, 53',
    cmyk: '0, 75, 77, 10',
    pantone: 'Pantone 179 C',
    uso: 'Ofertas, alertas, precios especiales.',
  },
  {
    nombre: 'Oscuro',
    hex: '#1A1A1A',
    rgb: '26, 26, 26',
    cmyk: '0, 0, 0, 90',
    pantone: 'Pantone Black 6 C',
    uso: 'Textos principales, fondos secundarios oscuros.',
  },
]

export default function GamaCromatica() {
  return (
    <section id="colores" className="seccion">
      <div className="container">
        <div className="row">
          <div className="col-12 encabezado-seccion">
            <span className="numero-seccion">04</span>
            <span className="etiqueta-seccion">Paleta de Colores</span>
            <h2>Gama Cromática</h2>
            <div className="linea-deco" />
            <p>
              La paleta de Supermercado Máximo está construida alrededor
              del verde como eje central, evocando frescura y naturaleza.
              El amarillo aporta energía y optimismo; el rojo, urgencia y ofertas.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {colores.map(color => (
            <div key={color.hex} className="col-md-6 col-lg-4 col-xl">
              <div className="bloque-color">
                <div
                  className="bloque-color-muestra"
                  style={{ background: color.hex }}
                />
                <div className="bloque-color-info">
                  <h5>{color.nombre}</h5>
                  <p className="codigo-hex">{color.hex}</p>
                  <p>RGB: {color.rgb}</p>
                  <p>CMYK: {color.cmyk}</p>
                  <p style={{ marginTop: '0.6rem', fontSize: '0.76rem', color: 'var(--color-verde)', fontWeight: 500 }}>
                    {color.uso}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="tarjeta">
              <h5 style={{ fontFamily: 'var(--fuente-titulo)', marginBottom: '1rem' }}>
                Degradado oficial de marca
              </h5>
              <div style={{
                height: '80px',
                borderRadius: '12px',
                background: 'linear-gradient(90deg, #2E7D32, #66BB6A, #FDD835, #E53935)',
              }} />
              <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--color-texto-suave)' }}>
                CSS: <code style={{ background: '#f5f5f5', padding: '2px 8px', borderRadius: '4px' }}>
                  linear-gradient(90deg, #2E7D32, #66BB6A, #FDD835, #E53935)
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
