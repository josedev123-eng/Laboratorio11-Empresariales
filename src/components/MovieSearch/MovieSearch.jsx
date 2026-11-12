import './MovieSearch.css'

// Controlled input: the text comes from the parent (Hero) by props
function MovieSearch({ value, onChange }) {
  return (
    <div className="movie-search">
      <label htmlFor="search" className="label">Buscar película</label>
      <input
        id="search"
        type="text"
        className="input"
        placeholder="Escribe el título de una película..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

export default MovieSearch
