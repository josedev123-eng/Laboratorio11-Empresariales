# CineTecsup - Laboratorio 11

Cartelera de cine hecha con React y Vite para el curso Desarrollo de Aplicaciones Empresariales.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

## Estructura

```
src/
├── components/
│   ├── Button/      botón reutilizable (children + variant + size)
│   ├── Header/      nombre del cine, navegación y total de favoritas
│   ├── Hero/        banner con la película destacada y el buscador
│   ├── MovieSearch/ input controlado con retardo de 500 ms
│   ├── MovieList/   filtra la cartelera por el texto buscado y muestra estado vacío
│   ├── MovieCard/   tarjeta de una película con botón de favorita
│   └── Footer/      contacto e información
├── data/
│   └── movies.js    cartelera con 8 películas
├── styles/
│   ├── variables.css
│   ├── base.css
│   ├── typography.css
│   ├── forms.css
│   ├── layout.css
│   ├── utilities.css
│   └── index.css
├── App.jsx          compone todos los componentes
└── main.jsx
```

## Estado de la aplicación

| Dato | Dónde vive | Por qué |
|------|------------|---------|
| favorites | App (useState + localStorage) | Lo usan el Header (contador) y cada MovieCard (botón), así que tiene que estar en el padre común. Se guarda en localStorage para que no se pierda al recargar. |
| search | App (useState) | Lo escribe MovieSearch (dentro de Hero) y lo usa MovieList para filtrar; son componentes hermanos, por eso sube a App. |
| text | MovieSearch (useState) | Es el valor del input mientras se escribe; nadie más lo necesita hasta que pasa el retardo. |

## Componente reutilizable

`Button` recibe el contenido por `children`, el color por `variant` (primary, secondary, outline) y el tamaño por `size`. Se usa en Hero (Ver cartelera y Contáctanos) y en cada MovieCard (botón de favorita) cambiando solo sus props.

## Dependencias

- react, react-dom
- vite, @vitejs/plugin-react
