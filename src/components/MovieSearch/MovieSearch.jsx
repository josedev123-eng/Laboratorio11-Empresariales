import { useState, useEffect } from 'react'
import './MovieSearch.css'

function MovieSearch({ onSearch }) {
  // The text of the input lives in the state (controlled input)
  const [text, setText] = useState('')

  function handleChange(event) {
    console.log('Typing:', event.target.value)
    setText(event.target.value)
  }

  // Waits 500 ms after the last key before sending the text to App
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Searching:', text)
      onSearch(text)
    }, 500)

    // If the user types again before 500 ms, the previous timer is cancelled
    return () => clearTimeout(timer)
  }, [text, onSearch])

  return (
    <div className="movie-search">
      <label htmlFor="search" className="label">Buscar película</label>
      <input
        id="search"
        type="text"
        className="input"
        placeholder="Escribe el título de una película..."
        value={text}
        onChange={handleChange}
      />
    </div>
  )
}

export default MovieSearch
