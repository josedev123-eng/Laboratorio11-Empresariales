// Adapter pattern: converts a movie as it comes from the API
// into the model that the components use.
// If the API changes, only this file has to change.
export function adaptMovie(apiMovie) {
  return {
    id: apiMovie.movie_id,
    title: apiMovie.movie_title,
    image: apiMovie.poster_url,
    synopsis: apiMovie.overview,
    classification: apiMovie.age_rating,
    // The API sends the score from 0 to 10, the app shows it from 0 to 5
    rating: apiMovie.vote_average / 2,
    schedules: apiMovie.showtimes ?? [],
  }
}

export function adaptMovies(apiMovies) {
  return apiMovies.map(adaptMovie)
}
