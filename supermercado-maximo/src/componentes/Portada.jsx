import '../estilos/Portada.css'

export default function Portada() {
  return (
    <section id="inicio" className="seccion-portada">
      <div className="portada-patron" />
      <div className="portada-circulos" />
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 fade-up">
            <span className="portada-etiqueta">Manual de Marca • 2025</span>
            <h1 className="portada-titulo">
              Super
              <span className="acento">Máximo</span>
            </h1>
            <p className="portada-subtitulo">
              El sabor del barrio, la calidad de siempre.
              Guía completa de identidad visual para nuestra
              marca de canasta familiar.
            </p>
            <a href="#la-marca" className="portada-boton">
              Explorar la marca →
            </a>
          </div>
          <div className="col-lg-6">
            <div className="portada-logo-visual fade-up">
              <div className="logo-grande">
                <span className="nombre-sup">Supermercado</span>
                <span className="nombre-max">Máximo</span>
                <span className="icono-estrella">★ ★ ★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portada-scroll">
        <span>Scroll</span>
        <div className="flecha-abajo" />
      </div>
    </section>
  )
}
