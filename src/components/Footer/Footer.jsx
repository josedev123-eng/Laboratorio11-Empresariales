import './Footer.css'

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="container footer-content">
        <div>
          <h3>CineTecsup</h3>
          <p>Las mejores películas de la semana en un solo lugar.</p>
        </div>
        <div>
          <h4>Contacto</h4>
          <p>Av. Cascanueces 2221, Santa Anita, Lima</p>
          <p>Teléfono: (01) 317-3900</p>
          <p>Correo: contacto@cinetecsup.pe</p>
        </div>
        <div>
          <h4>Horario de atención</h4>
          <p>Lunes a domingo</p>
          <p>12:00 p. m. a 11:00 p. m.</p>
        </div>
      </div>
      <p className="footer-copy">© 2026 CineTecsup. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer
