import './Header.css'

function Header({ favoritesCount }) {
  return (
    <header className="header">
      <div className="container header-content">
        <a href="#" className="header-logo">
          Cine<span>Tecsup</span>
        </a>
        <nav>
          <ul className="header-nav">
            <li><a href="#">Inicio</a></li>
            <li><a href="#cartelera">Cartelera</a></li>
            <li><a href="#">Promociones</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li className="header-favorites">♥ Favoritas: {favoritesCount}</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
