import usePremieres from '../../hooks/usePremieres.js'
import useWindowSize from '../../hooks/useWindowSize.js'
import { getColumns } from '../../utils/columns.js'
import SkeletonCard from '../SkeletonCard/SkeletonCard.jsx'
import PremiereCarousel from '../PremiereCarousel/PremiereCarousel.jsx'
import Button from '../Button/Button.jsx'
import './PremieresSection.css'

function PremieresSection() {
  const { premieres, loading, error, retry } = usePremieres()
  const { width } = useWindowSize()
  const skeletons = Array.from({ length: getColumns(width) }, (_, i) => i)

  return (
    <section className="container section" id="estrenos">
      <h2 className="section-title">Próximos estrenos</h2>

      {/* 1. Loading state */}
      {loading && (
        <div>
          <p className="text-muted mb-md">Cargando los próximos estrenos...</p>
          <div
            className="premieres-skeletons"
            style={{ gridTemplateColumns: `repeat(${skeletons.length}, 1fr)` }}
          >
            {skeletons.map((item) => (
              <SkeletonCard key={item} />
            ))}
          </div>
        </div>
      )}

      {/* 2. Error state */}
      {!loading && error && (
        <div className="premieres-error">
          <h3 className="text-error">No pudimos cargar los estrenos</h3>
          <p className="text-muted">{error}</p>
          <p className="text-muted mb-md">
            Revisa tu conexión a internet e inténtalo de nuevo. La cartelera de hoy sigue disponible más abajo.
          </p>
          <Button onClick={retry}>Reintentar</Button>
        </div>
      )}

      {/* 3. State with data */}
      {!loading && !error && <PremiereCarousel premieres={premieres} />}
    </section>
  )
}

export default PremieresSection
