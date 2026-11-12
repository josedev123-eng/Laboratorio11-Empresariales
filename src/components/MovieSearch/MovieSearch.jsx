import { useState, useEffect } from 'react'
import useDebounce from '../../hooks/useDebounce.js'
import './MovieSearch.css'

function MovieSearch({ onSearch }) {
  // The text of the input lives in the state (controlled input)
  const [text, setText] = useState('')

  // The text waits 500 ms before being used
  const debouncedText = useDebounce(text, 500)

  // Sends the text to App only when the debounced value changes
  useEffect(() => {
    onSearch(debouncedText)
  }, [debouncedText, onSearch])

  return (
    <div className="movie-search">
      <label htmlFor="search" className="label">Buscar película</label>
      <input
        id="search"
        type="text"
        className="input"
        placeholder="Escribe el título de una película..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  )
}

export default MovieSearch
