import { useState, useEffect } from 'react'
import Button from '../Button/Button.jsx'
import MovieSearch from '../MovieSearch/MovieSearch.jsx'
import useDebounce from '../../hooks/useDebounce.js'
import './Hero.css'

function Hero({ movie, onSearch }) {
  // The text lives here because MovieSearch shows it and the clear button resets it
  const [searchText, setSearchText] = useState('')
  const debouncedText = useDebounce(searchText, 500)

  // App only receives the text when the user stops typing
  useEffect(() => {
    onSearch(debouncedText)
  }, [debouncedText, onSearch])

  function clearSearch() {
    setSearchText('')
    onSearch('')
  }

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
            <MovieSearch value={searchText} onChange={setSearchText} />
            <div className="flex-gap">
              <Button href="#cartelera">Ver cartelera</Button>
              {searchText !== '' && (
                <Button variant="outline" onClick={clearSearch}>
                  ✕ Limpiar filtro
                </Button>
              )}
              <Button href="#contacto" variant="secondary">Contáctanos</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
