import Button from '../Button/Button.jsx'
import './MovieCard.css'

function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <article className="movie-card">
      <div className="movie-card-image">
        <img src={movie.image} alt={movie.title} />
        <span className="movie-card-classification">{movie.classification}</span>
      </div>
      <div className="movie-card-body">
        <h3>{movie.title}</h3>
        <p className="movie-card-rating">★ {movie.rating} / 5</p>
        <ul className="movie-card-schedules">
          {movie.schedules.map((schedule) => (
            <li key={schedule}>{schedule}</li>
          ))}
        </ul>
        <div className="movie-card-actions">
          <Button
            variant={isFavorite ? 'primary' : 'outline'}
            size="small"
            onClick={() => onToggleFavorite(movie.id)}
          >
            {isFavorite ? '♥ En favoritas' : '♡ Agregar a favoritas'}
          </Button>
        </div>
      </div>
    </article>
  )
}

export default MovieCard
