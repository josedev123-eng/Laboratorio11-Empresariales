import './SkeletonCard.css'

// Gray card that is shown while the data is loading
function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-image"></div>
      <div className="skeleton skeleton-line"></div>
      <div className="skeleton skeleton-line skeleton-line-short"></div>
    </div>
  )
}

export default SkeletonCard
