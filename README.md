# Personal site

Sitio personal de David de la Torre, desarrollado como portfolio profesional. Reúne una presentación de su perfil como ingeniero de software, experiencia, proyectos seleccionados, artículos del blog y vías de contacto.

## Stack

- [Astro 5](https://astro.build/) para generar el sitio estático y sus rutas.
- [Tailwind CSS 4](https://tailwindcss.com/) integrado mediante el plugin de Vite.
- TypeScript en componentes y configuración de contenido.
- Astro Content Collections para gestionar y validar las entradas del blog y los proyectos en Markdown.

Las versiones exactas instaladas están fijadas en `package-lock.json`.

## Requisitos

- Node.js `18.20.8`, Node.js 20 a partir de `20.3.0`, o Node.js `22` o posterior.
- npm `9.6.5` o posterior.

## Instalación

Desde la raíz del repositorio, instala exactamente las dependencias registradas en el lockfile:

```sh
npm ci
```

Después, inicia el servidor de desarrollo:

```sh
npm run dev
```

El sitio estará disponible, por defecto, en `http://localhost:4321`.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor local de desarrollo. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente el build de producción para revisarlo. |
| `npm run astro -- <comando>` | Ejecuta un comando de la CLI de Astro, por ejemplo `npm run astro -- --help`. |

Todos los comandos se ejecutan desde la raíz del repositorio.

## Estructura relevante

```text
.
├── public/                  # Fuentes, imágenes y otros recursos estáticos
├── src/
│   ├── components/         # Navegación, pie, enlaces y secciones reutilizables
│   ├── content/
│   │   ├── blog/           # Artículos en Markdown
│   │   ├── projects/       # Fichas de proyectos en Markdown
│   │   └── config.ts       # Esquemas de las colecciones de contenido
│   ├── layouts/            # Layout compartido de las páginas
│   ├── pages/              # Rutas del sitio
│   └── styles/             # Estilos globales
├── astro.config.mjs        # Configuración de Astro y Tailwind mediante Vite
├── package.json            # Scripts y dependencias del proyecto
└── package-lock.json       # Versiones exactas para instalaciones reproducibles
```

`dist/` se crea al ejecutar el build y no debe editarse manualmente.
