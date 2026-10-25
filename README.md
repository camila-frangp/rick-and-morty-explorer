# Rick and Morty Explorer

Aplicación web hecha con **React** que consume la [API pública de Rick and Morty](https://rickandmortyapi.com) para buscar, filtrar y ver el detalle de los personajes de la serie.

Trabajo Práctico Final (PF.B) del **Curso Inicial de Desarrollo Front-End**, Módulo 3: Desarrollo con React.js y Ecosistema Moderno. UTN, Centro de e-Learning.

## Funcionalidades

- **Listado en cards** de los 826 personajes, con imagen, nombre, estado, especie, género y última ubicación.
- **Búsqueda en tiempo real** por nombre: los resultados se actualizan mientras se escribe, con una espera de 500 ms para no hacer una petición por cada letra.
- **Filtros** por estado (vivo, muerto, desconocido) y por género, combinables con la búsqueda.
- **Paginado** para navegar entre las páginas de resultados de la API.
- **Página de detalle** de cada personaje (`/personajes/:id`) con toda su información y la lista de episodios en que aparece.
- **Página 404** personalizada para las rutas que no existen.
- **Manejo de estados de carga y de error**, con un botón para reintentar si falla la conexión.
- **Diseño responsive**, adaptado a celulares y computadores.

## Tecnologías

- [React](https://es.react.dev/): librería principal de la interfaz.
- [Vite](https://vitejs.dev/): herramienta de desarrollo y build.
- [React Router](https://reactrouter.com/): enrutamiento entre páginas.
- [Sass](https://sass-lang.com/): estilos con variables y anidamiento.
- `fetch`: llamadas a la API.

## Cómo ejecutar el proyecto localmente

### Requisitos previos

- [Node.js](https://nodejs.org/) versión 20.19 o superior (incluye `npm`).
- [Git](https://git-scm.com/).

### Pasos

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/camila-frangp/rick-and-morty-explorer.git
   ```

2. Entrar a la carpeta del proyecto:

   ```bash
   cd rick-and-morty-explorer
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abrir en el navegador la dirección que aparece en la terminal, normalmente [http://localhost:5173](http://localhost:5173).

### Opcional: generar la versión de producción

No es necesario para ejecutar el proyecto. Sirve para obtener la versión optimizada que se publica en un hosting.

1. Generar el build (crea la carpeta `dist`):

   ```bash
   npm run build
   ```

2. Probar localmente esa versión:

   ```bash
   npm run preview
   ```

   Se abre normalmente en [http://localhost:4173](http://localhost:4173).

### Otros comandos

| Comando           | Descripción                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo.                    |
| `npm run build`   | Genera la versión de producción en la carpeta `dist`. |
| `npm run preview` | Sirve localmente la versión de producción generada.  |

## Estructura del proyecto

```
src/
├── components/          Componentes reutilizables
│   ├── CharacterCard/   Card de un personaje
│   ├── CharacterList/   Grilla de cards
│   ├── EpisodeList/     Lista de episodios de un personaje
│   ├── ErrorMessage/    Mensaje de error con botón para reintentar
│   ├── Footer/          Pie de página
│   ├── Layout/          Estructura común: Navbar + contenido + Footer
│   ├── Loader/          Indicador de carga
│   ├── Navbar/          Menú de navegación
│   ├── Pagination/      Paginado
│   ├── SearchBar/       Buscador y filtros
│   └── StatusBadge/     Indicador de estado (vivo, muerto, desconocido)
├── pages/               Una carpeta por ruta
│   ├── Home/            /
│   ├── Characters/      /personajes
│   ├── CharacterDetail/ /personajes/:id
│   └── NotFound/        Cualquier otra ruta (404)
├── services/
│   └── api.js           Llamadas a la API con fetch y manejo de errores
├── styles/
│   ├── _variables.scss  Variables de Sass (colores, medidas, etc.)
│   └── main.scss        Estilos globales
├── utils/
│   └── translations.js  Traducción al español de los textos de la API
├── App.jsx              Definición de las rutas
└── main.jsx             Punto de entrada
```

Cada componente tiene su propio archivo `.scss` junto al `.jsx`. Los estilos usan las variables de `src/styles/_variables.scss` y nombres de clase con la convención BEM (`bloque__elemento--modificador`).

## API utilizada

[The Rick and Morty API](https://rickandmortyapi.com/documentation). Es gratuita y no requiere autenticación. Endpoints usados:

| Endpoint                                     | Uso                                        |
| -------------------------------------------- | ------------------------------------------ |
| `GET /api/character?page=&name=&status=&gender=` | Listado de personajes con filtros y paginado |
| `GET /api/character/:id`                     | Detalle de un personaje                    |
| `GET /api/episode/1,2,3`                     | Episodios de un personaje (varios a la vez) |
