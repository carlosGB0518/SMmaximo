import '../estilos/Navegacion.css'

const enlaces = [
  { href: '#la-marca',    label: 'La Marca' },
  { href: '#concepto',    label: 'Concepto' },
  { href: '#logotipo',    label: 'Logotipo' },
  { href: '#colores',     label: 'Colores' },
  { href: '#tipografia',  label: 'Tipografía' },
  { href: '#tamano',      label: 'Tamaño' },
  { href: '#uso',         label: 'Uso Correcto' },
  { href: '#tono',        label: 'Tono' },
  { href: '#papeleria',   label: 'Papelería' },
  { href: '#patron',      label: 'Patrón' },
]

export default function Navegacion() {
  return (
    <nav className="barra-nav">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto">
            <a href="#inicio" className="marca-logo">
              <span>M</span> Máximo
            </a>
          </div>
          <div className="col">
            <div className="nav-enlaces">
              {enlaces.map(e => (
                <a key={e.href} href={e.href}>{e.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
