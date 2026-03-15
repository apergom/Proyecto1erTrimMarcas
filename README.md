# UltraWiki – Guía de funcionamiento de la web

Este documento explica **cómo se usa y cómo está organizada la página web UltraWiki**, pensada como wiki y hub de recursos sobre el videojuego ULTRAKILL.

## Estructura general y navegación

La web está compuesta por varias páginas HTML enlazadas entre sí mediante un **menú de navegación fijo en la parte superior**, presente en todas las vistas para saltar rápidamente entre secciones. Cada página comparte un **footer común** con enlaces a redes, newsletter y avisos legales, lo que da coherencia visual y facilita encontrar siempre los mismos accesos al final del sitio.

Las páginas principales son:

- `index.html`: portada y hub hacia el resto de secciones.
- `about.html`: información sobre el autor y el origen del proyecto.
- `services.html`: enlaces y recursos para comprar ULTRAKILL en tiendas oficiales.
- `weapons.html`: wiki detallada de armas, variantes y estadísticas.
- `blog.html`: noticias, actualizaciones y contenido dinámico.
- `contact.html`: formulario de contacto, FAQ y enlaces de soporte.

Además, hay páginas temáticas (`lore.html`, `levels.html`, `enemies.html`, `soundtrack.html`, `development.html`, `style.html`) que profundizan en historia, niveles, enemigos, música, desarrollo y estilo. Toda la presentación visual se controla desde `style.css`, que define colores, tipografías, maquetación responsive, tablas y banners para todo el sitio.

## Flujo típico de uso

Un recorrido habitual por la web suele ser el siguiente:

1. **Entrada por `index.html`**  
   El usuario llega a la portada, donde se explica qué es ULTRAKILL, su jugabilidad inspirada en shooters clásicos y hack & slash, y se muestran accesos directos a armas, niveles, enemigos o lore.

2. **Consulta de contenido específico**
    - Para mejorar jugabilidad: `weapons.html` y `style.html` con armas, variantes y consejos avanzados.
    - Para explorar el universo: `lore.html`, `levels.html` y `enemies.html`.
    - Para comprar el juego: `services.html`, con logos, enlaces y comparativas visuales de tiendas digitales fiables.

3. **Novedades y comunidad**  
   El usuario visita `blog.html` para ver noticias, parches recientes, próximos contenidos y enlaces a trailers y canales de la comunidad.

4. **Contacto y soporte**  
   Desde `contact.html` puede rellenar un formulario, leer una pequeña FAQ y usar enlaces a redes, Discord o los desarrolladores para resolver dudas o colaborar.

En cualquier momento se puede volver al inicio o cambiar de sección usando el menú fijo o los enlaces internos dentro del contenido.

## Diseño visual y comportamiento

El diseño se inspira en el formato de **wikis de videojuegos tipo Fandom**, con secciones bien diferenciadas, tablas comparativas y contenido estructurado para consulta rápida. Cada página suele incluir una **cabecera con banner**, bloques de contenido organizados (texto, listas, tablas, imágenes) y un **footer homogéneo** con enlaces recurrentes.

La maquetación aplica un **diseño responsive**, adaptando imágenes, tablas y formularios a distintas resoluciones para que la navegación sea cómoda tanto en PC como en móvil.

## Lógica de contenido por página

A nivel funcional, cada archivo HTML cumple un rol concreto:

- `index.html`: resumen del juego, explicación básica de mecánicas clave (incluida la recuperación de vida) y distribución de enlaces hacia secciones principales.
- `about.html`: presentación personal del autor, motivaciones, referencias que inspiraron el proyecto y agradecimientos, junto a enlaces a los creadores del juego.
- `services.html`: recopilación de tiendas y plataformas donde adquirir ULTRAKILL legalmente, con énfasis en ofertas seguras y oficiales.
- `weapons.html`: explicación técnica de cada arma, variantes de color, formas de obtención, tipos de disparo, tablas de estadísticas y recomendaciones avanzadas.
- `blog.html`: listado de entradas con noticias, actualizaciones y debates, enlazando a trailers y recursos de la comunidad.
- `contact.html`: formulario de contacto, guía rápida de ayuda y FAQ, además de enlaces para apoyar el proyecto o unirse a la comunidad.

Las páginas temáticas adicionales funcionan como capítulos especializados de la wiki (lore, niveles, enemigos, banda sonora, desarrollo, estilo), unificados por el mismo CSS y la barra de navegación común.

## Objetivo de la experiencia de usuario

El sitio está diseñado para que cualquier fan de ULTRAKILL encuentre en un único lugar **información jugable, de universo, de comunidad y de compra**, sin tener que ir saltando entre muchas webs distintas. Por ello se combinan textos detallados, tablas, imágenes, enlaces oficiales y un tono personal y con humor, buscando que la experiencia sea útil, fiable y cercana al usuario.


# Actualización README JS

## RA3 — Acceso y manipulación del DOM con JavaScript

### 3.a Clasificación de lenguajes de script de cliente
En este proyecto se utiliza **JavaScript** como lenguaje de script de cliente, basado en el estándar **ECMAScript**.
Se aplica sintaxis moderna **ES6+** (let/const, arrow functions, template literals, destructuring y spread).
Se justifica su uso frente a alternativas porque:
- Es nativo del navegador.
- No requiere librerías externas para manipular el DOM.
- Permite validación en tiempo real e interactividad completa.

### 3.b Sintaxis básica (ES6+)
En `js/script.js` se aplica:
- `let` y `const` en lugar de `var`.
- Arrow functions en callbacks de eventos y funciones utilitarias.
- Template literals para construir tarjetas dinámicas del blog.
- Desestructuración de objetos (`const { title, category, ... } = data`).
- Spread operator (`posts = [...posts, newPost]`).

### 3.c Selección y acceso a elementos
Se usan:
- `getElementById` para formulario, campos y contenedores.
- `querySelectorAll` para iterar tarjetas del blog al filtrar.
- `closest` y `matches` para manejar eventos de eliminación por delegación.

### 3.d Creación y modificación de elementos
Cada entrada del blog se genera dinámicamente con:
- `createElement("article")`
- Asignación de `dataset`, clases y contenido.
- Inserción en DOM mediante `appendChild`.
- Estructura semántica en tarjetas (`article.post-card`).

### 3.e Eliminación de elementos
Cada tarjeta incluye su botón de eliminar.
Al pulsar:
- Se localiza el elemento con `closest(".post-card")`.
- Se verifica existencia y se elimina con `remove()`.
- Se actualiza el array interno de entradas para mantener consistencia.

### 3.f Modificación de estilos
Se manipulan clases CSS con `classList.add/remove/toggle` para:
- Estados de validación (`input-error`, `input-success`).
- Ocultación por filtros (`hidden`) sin borrar del DOM.
- Flujo libre de **modo oscuro** (`body.dark-mode`).

## Funcionalidades implementadas

1. **Gestor de entradas de blog** (feature principal integrada)
   - Formulario con validación dinámica en tiempo real.
   - Alta de entradas en una cuadrícula dinámica.
   - Eliminación individual de entradas.
   - Filtros por categoría y estado.

2. **Flujo libre: modo oscuro**
   - Botón para activar/desactivar tema.
   - Persistencia con `localStorage`.

## Estructura
- `blog.html`
- `css/style.css`
- `js/script.js`
