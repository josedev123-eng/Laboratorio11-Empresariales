import { useState, useEffect } from 'react'

// Returns the current width and height of the browser window
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)

    // Removes the listener when the component is unmounted
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}

export default useWindowSize
