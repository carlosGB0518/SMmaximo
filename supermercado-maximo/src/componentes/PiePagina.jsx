import '../estilos/Secciones.css'

export default function PiePagina() {
  return (
    <footer className="pie-pagina">
      <div className="container">
        <span className="pie-logo">Supermercado Máximo</span>
        <p className="pie-subtitulo">Manual de Marca · 2025</p>
        <div className="pie-linea" />
        <p className="pie-copy">
          © 2025 Supermercado Máximo · Todos los derechos reservados ·
          Documento de uso interno
        </p>
      </div>
    </footer>
  )
}
