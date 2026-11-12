import premieresApi from '../data/premieres.js'

// Simulates a request to the server that takes 1.5 seconds.
// If the page is opened with ?error in the URL, the request fails
export function getPremieres() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = window.location.search.includes('error')

      if (shouldFail) {
        reject(new Error('El servidor de estrenos no respondió (error 503).'))
      } else {
        resolve(premieresApi)
      }
    }, 1500)
  })
}
