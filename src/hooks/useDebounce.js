import { useState, useEffect } from 'react'

// Returns the value only after it stops changing for "delay" milliseconds
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // If the value changes before the delay, the previous timer is cancelled
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
