# Proyecto Modulo 3 Equipo 4

En este proyecto hemos trabajado con un caso muy típico que se suele producir en el mundo de la programación, un trabajo que nos viene dado, con código heredado, es decir escrito por otra persona y sobre el que tenemos que trabajar. En este caso es un poco especial porque hemos trabajado con código heredado pero nuestro: el código del proyecto del segundo módulo (el generador de tarjetas interactivas).

## Integrantes del Equipo
- Elvira Cañas Abalos [![GitHub elvfira](https://img.shields.io/github/followers/elvfira?label=follow&style=social)](https://github.com/elvfira)
- Esther Fernández [![GitHub GitTher](https://img.shields.io/github/followers/GitTher?label=follow&style=social)](https://github.com/GitTher)
- Mariana Viana Rodriguez [![GitHub Vianam92](https://img.shields.io/github/followers/Vianam92?label=follow&style=social)](https://github.com/Vianam92)
- Mata Ponce de León [![GitHub poncegui](https://img.shields.io/github/followers/poncegui?label=follow&style=social)](https://github.com/poncegui)
- Sara Sánchez [![GitHub SaraSanchezL](https://img.shields.io/github/followers/SaraSanchezL?label=follow&style=social)](https://github.com/SaraSanchezL)

## Objetivos

 - Lidiar con código heredado y ser capaces de refactorizarlo.
 - Saber identificar y generar los componentes de una página, separarlos y crear componentes visualmente similares a partir de estos.
 - Aprender a usar React para crear una aplicación web sencilla.
 - Aprender a buscar información en la documentación de librerías externas.
 - Implementar Scrum como marco de referencia para el desarrollo del producto, basándonos siempre en los valores de Agile como puntos clave del trabajo en equipo y la mejora continua.
 - Mejorar la comunicación entre los miembros del equipo.
 - Mejorar vuestras habilidades de comunicación en público al exponer el proyecto en la sesión final.

## Especificaciones

Hemos partido de un proyecto funcional (el generador de tarjetas interactivas), solo debemos heredar todo el Sass del proyecto, mantenerlo, evolucionarlo y refactorizarlo. Refactorizar código consiste en modificar un código para mejorar su estructura pero sin añadir nuevas funcionalidades.
De cara a la refactorización, el proyecto debe utilizar estas tecnologías:

 * Uso de Sass para los estilos
 * Uso de mediaqueries para que el diseño sea adaptable al dispositivo
 * Desarrollo usando la estrategia mobile first
 * Uso de git para el control de versiones del proyecto, con ramas y pull-requests para revisar los cambios de las compañeras
 * Publicación del resultado en Internet usando GitHub Pages

## La webapp deberá tener las siguientes nuevas características:

 - Uso de React para la estructuración del JS de la aplicación.
 - Deberá usar transiciones y/o animaciones para mejorar interacciones con la aplicación.
 - Debe implementarse con una navegación entre distintas páginas de la aplicación usando React router.

## Planificación técnica

* Primero paso. Análisis del proyecto:
   - En este proyecto debemos:
 1. Descargar el proyecto que nos hayan asignado, para entender el código heredado.
 2. Un nuevo repo con el proyecto de React.
 3. Analizar y probar el código y entender su estructura para poder adaptarla a nuestras necesidades y conocimientos.
 4. Solucionar errores detectados en el código.

 * Segundo paso. Maquetación con React de la página de la herramienta:
  1. Definir la estructura de componentes React de la aplicación.
  2. Generar los componentes del proyecto y comunicar información mediante props.

 * Tercero. Versión completa con React:
  1. Realizar la interactividad, usando el estado y los eventos de React
  2. Usar inputs de tipo file para la gestión de la foto de la tarjeta.
  3. Actualización de la foto en la vista previa de la tarjeta, usando el componente proporcionado.
  4. Implementar la comunicación con el backend, la función de compartir y offline.

 * Cuarta. Mejoras finales:
  1. Crear la página de landing.
  2. Implementar las rutas con React router.
  3. Revisión del código y pruebas.
  4. Podrán implementarse otras mejoras visuales si todo ya está terminado y acordado con el PO.

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://gulpjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg" alt="gulp" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> </p>

###### Guía de inicio rápido

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/) para trabajar con este Starter Kit React:

*Pasos a seguir cada vez que queremos arrancar un proyecto desde cero:*

1. **Clona esta repositorio desde GitHub**.
1. **Abre una terminal** en la carpeta raíz del repositorio.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```
```bash
npm install node-sass
```
```bash
npm install react-router-dom@5.3.0
```

**Pasos para arrancar el proyecto:**

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. **El proyecto hay que arrancarlo cada vez desees verlo desde tu computador** Para ello ejecuta el comando:

```bash
npm start
```

Este comando:

- **Abre una ventana de tu navegador y muestra la página web**, al igual que hace el plugin de VS Code Live Server (Go live).


**Para generar mi página para producción ejecute el comando:**

```bash
npm run githubpages
```
Y a continuación:

1. Entre en la pestaña `settings` de mi repositorio b.
2. Y en el apartado de GitHub Pages activa la opción **master branch /docs folder**.
3. Y ya está

Tal vez quieras cojer el código de esta evaluación entonces estas en libertad de hacer los mismos pasos que hice yo para tu repo. Recuerda que deberias copiarlo (descargarlo como un zip) y no clonarlo si es lo que deseas. 
