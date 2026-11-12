// How many cards fit in one row depending on the window width
export function getColumns(width) {
  if (width < 600) return 1
  if (width < 900) return 2
  if (width < 1200) return 3
  return 4
}
