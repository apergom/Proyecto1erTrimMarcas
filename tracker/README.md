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

## Comentarios Adicionales

Para aclarar los cambios realizados tras leer los comentarios de retroalimentacion. He aplicado todo lo que me has comentado para poder subir en los distintos criterios de HTML. También he de decir que me he ayudado de la IA para ciertas cosas que no sabia realmente como aplicar y que ni leyendo los apuntes he podido sacar. Sobre las paginas web vacias, las he querido dejar en blanco puesto que me llevaria muchisimo trabajo el sacarlas adelante y como en los criterios solo se evaluan 6 ".html" no las habia modificado, mas que nada, estan como plan de futuro.