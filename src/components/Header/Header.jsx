import './Header.css'

// Header only receives the number, not the list of favorites
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
            <li><a href="#estrenos">Estrenos</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li className="header-favorites">
              ♥ Favoritas <span className="badge">{favoritesCount}</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
