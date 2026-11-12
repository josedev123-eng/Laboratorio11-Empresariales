import { useState, useEffect } from 'react'
import { getPremieres } from '../services/premieresService.js'
import { adaptMovies } from '../adapters/movieAdapter.js'

// Loads the premieres and returns the three possible states:
// loading, with data (premieres) and with error
function usePremieres() {
  const [premieres, setPremieres] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    setLoading(true)
    setError(null)

    getPremieres()
      .then((data) => {
        setPremieres(adaptMovies(data))
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [attempt])

  // Changing attempt runs the effect again
  function retry() {
    setAttempt(attempt + 1)
  }

  return { premieres, loading, error, retry }
}

export default usePremieres
