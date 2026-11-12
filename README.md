# CineTecsup - Laboratorio 11

Cartelera de cine hecha con React y Vite para el curso Desarrollo de Aplicaciones Empresariales. Tema: comunicación entre componentes.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Para ver el estado de error de los estrenos, abrir `http://localhost:5173/?error`.

## Árbol de componentes y dónde vive cada dato

```
App                  [favorites, search]  → favoritesCount, toast
├── Header           ← favoritesCount (solo el número)
├── Hero             [searchText]  → useDebounce → onSearch
│   ├── MovieSearch  ← value, onChange
│   └── Button x3
├── PremieresSection usePremieres() [premieres, loading, error]
│   ├── SkeletonCard (mientras carga)
│   └── PremiereCarousel [start]  useWindowSize()
├── MovieList        ← movies, search, favorites, onToggleFavorite   useWindowSize()
│   └── MovieCard    ← movie, isFavorite, onToggleFavorite
├── Footer
└── Toaster          (react-hot-toast)
```

| Dato | Dónde vive | Por qué |
|------|------------|---------|
| favorites | App | Lo necesitan Header (contador) y MovieCard (botón), que están en ramas distintas. El ancestro común es App. |
| favoritesCount | App (calculado) | Se calcula de favorites; el Header solo recibe el número. |
| search | App | Lo produce Hero y lo usa MovieList, que son hermanos. |
| searchText | Hero | Lo usan MovieSearch (input) y el botón Limpiar filtro, los dos dentro de Hero; App no lo necesita letra por letra. |
| premieres, loading, error | PremieresSection (usePremieres) | Solo esa sección los usa. |
| start | PremiereCarousel | Posición del carrusel, solo le importa al carrusel. |

**¿Por qué el contador de favoritas no puede vivir en Header?** Porque quien cambia las favoritas es MovieCard, que es hijo de MovieList y no tiene relación con Header. Si el contador viviera en Header, MovieCard no podría actualizarlo, y además habría dos fuentes de verdad (la lista en App y el número en Header) que se podrían desincronizar. Por eso el dato sube al ancestro común (App) y el Header recibe solo el número calculado.

## Hooks propios

| Hook | Lógica que se extrajo | Componentes que lo usan |
|------|-----------------------|-------------------------|
| useDebounce | El retardo con setTimeout/clearTimeout que en el lab 10 estaba escrito dentro del buscador | Hero (buscador) |
| useWindowSize | Escuchar el evento resize y guardar el ancho y alto de la ventana | MovieList, PremiereCarousel y PremieresSection |
| usePremieres | Pedir los estrenos y manejar los estados de carga, datos y error, con reintento | PremieresSection |

## Otras piezas

- **Adaptador** (`src/adapters/movieAdapter.js`): convierte los datos con formato de API (`movie_title`, `vote_average` sobre 10...) al modelo que usan los componentes.
- **Servicio** (`src/services/premieresService.js`): simula la petición al servidor con 1.5 s de demora.
- **Biblioteca de interfaz**: `react-hot-toast` para los avisos al marcar o quitar favoritas.

## Dependencias

- react, react-dom, react-hot-toast
- vite, @vitejs/plugin-react
