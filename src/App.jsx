import { useState, useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import MovieList from './components/MovieList/MovieList.jsx'
import Footer from './components/Footer/Footer.jsx'
import movies from './data/movies.js'

function App() {
  const featuredMovie = movies[2]

  // List with the ids of the favorite movies.
  // When the page loads it reads what was saved in localStorage
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  })

  // Every time favorites changes it is saved in localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  // Text written in the search box
  const [search, setSearch] = useState('')

  // Adds the movie if it is not in the list, or removes it if it is
  function toggleFavorite(movieId) {
    if (favorites.includes(movieId)) {
      setFavorites(favorites.filter((id) => id !== movieId))
    } else {
      setFavorites([...favorites, movieId])
    }
  }

  return (
    <>
      <Header favoritesCount={favorites.length} />
      <main>
        <Hero movie={featuredMovie} onSearch={setSearch} />
        <MovieList
          movies={movies}
          search={search}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </main>
      <Footer />
    </>
  )
}

export default App
