import { useState } from 'react'
import Button from '../Button/Button.jsx'
import useWindowSize from '../../hooks/useWindowSize.js'
import { getColumns } from '../../utils/columns.js'
import './PremiereCarousel.css'

function PremiereCarousel({ premieres }) {
  const [start, setStart] = useState(0)

  // The same hook as MovieList decides how many premieres are visible
  const { width } = useWindowSize()
  const visible = getColumns(width)

  const lastStart = Math.max(premieres.length - visible, 0)
  // Keeps the position between 0 and the last possible start
  const current = Math.min(Math.max(start, 0), lastStart)
  const shownPremieres = premieres.slice(current, current + visible)

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ gridTemplateColumns: `repeat(${visible}, 1fr)` }}
      >
        {shownPremieres.map((premiere) => (
          <article key={premiere.id} className="carousel-item">
            <img src={premiere.image} alt={premiere.title} />
            <div className="carousel-item-body">
              <span className="badge">Estreno {premiere.releaseDate}</span>
              <h3>{premiere.title}</h3>
              <p className="text-muted text-small">{premiere.synopsis}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="carousel-controls">
        <Button variant="secondary" size="small" onClick={() => setStart(Math.max(current - 1, 0))}>
          ◀ Anterior
        </Button>
        <span className="text-muted text-small">
          {current + 1} - {current + shownPremieres.length} de {premieres.length}
        </span>
        <Button variant="secondary" size="small" onClick={() => setStart(Math.min(current + 1, lastStart))}>
          Siguiente ▶
        </Button>
      </div>
    </div>
  )
}

export default PremiereCarousel
