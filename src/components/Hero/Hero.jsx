import Button from '../Button/Button.jsx'
import MovieSearch from '../MovieSearch/MovieSearch.jsx'
import './Hero.css'

function Hero({ movie, onSearch }) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${movie.image})` }}
    >
      <div className="hero-overlay">
        <div className="container hero-content">
          <img src={movie.image} alt={movie.title} className="hero-poster" />
          <div className="hero-info">
            <span className="hero-badge">Estreno destacado</span>
            <h1>{movie.title}</h1>
            <p className="hero-details">
              {movie.classification} · ★ {movie.rating}
            </p>
            <p className="hero-synopsis">{movie.synopsis}</p>
            <MovieSearch onSearch={onSearch} />
            <div className="flex-gap">
              <Button href="#cartelera">Ver cartelera</Button>
              <Button href="#contacto" variant="secondary">Contáctanos</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
