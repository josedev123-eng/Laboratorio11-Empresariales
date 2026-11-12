import MovieCard from '../MovieCard/MovieCard.jsx'
import useWindowSize from '../../hooks/useWindowSize.js'
import { getColumns } from '../../utils/columns.js'
import './MovieList.css'

function MovieList({ movies, search, favorites, onToggleFavorite }) {
  // Number of cards per row depends on the window width
  const { width } = useWindowSize()
  const columns = getColumns(width)

  // Only the movies whose title contains the searched text
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="container" id="cartelera">
      <h2 className="section-title">Cartelera</h2>

      {filteredMovies.length === 0 ? (
        <div className="movie-list-empty">
          <p className="movie-list-empty-icon">🎬</p>
          <h3>No encontramos películas</h3>
          <p className="text-muted">
            Ninguna película coincide con "{search}". Prueba con otro título.
          </p>
        </div>
      ) : (
        <div
          className="movie-list"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={favorites.includes(movie.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default MovieList
