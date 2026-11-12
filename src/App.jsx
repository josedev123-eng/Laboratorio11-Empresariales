import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import PremieresSection from './components/PremieresSection/PremieresSection.jsx'
import MovieList from './components/MovieList/MovieList.jsx'
import Footer from './components/Footer/Footer.jsx'
import moviesApi from './data/movies.js'
import { adaptMovies } from './adapters/movieAdapter.js'

// All the movies pass through the adapter before reaching the components
const movies = adaptMovies(moviesApi)

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

  // Adds the movie if it is not in the list, or removes it if it is.
  // The card only sends the id; App decides how to notify the user
  function toggleFavorite(movieId) {
    const movie = movies.find((item) => item.id === movieId)

    if (favorites.includes(movieId)) {
      setFavorites(favorites.filter((id) => id !== movieId))
      toast(`"${movie.title}" se quitó de favoritas`, { icon: '💔' })
    } else {
      setFavorites([...favorites, movieId])
      toast.success(`"${movie.title}" se agregó a favoritas`)
    }
  }

  return (
    <>
      <Header favoritesCount={favorites.length} />
      <main>
        <Hero movie={featuredMovie} onSearch={setSearch} />
        <PremieresSection />
        <MovieList
          movies={movies}
          search={search}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { background: '#1a1d24', color: '#f2f2f2' },
        }}
      />
    </>
  )
}

export default App
