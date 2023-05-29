// Importamos los modulos de esm.sh
import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

// Hacemos una referencia de nuestro elemento con id=app
const appDomElement = document.querySelector('#app')

// Creamos un elemento React raiz y le pasamos como paramentro nuestro elemento html que será la raiz de la app
const root = ReactDOM.createRoot(appDomElement)

// Creamos un elemento parrafo pero usando React
const message = React.createElement('p', null,'Soy un mensaje')

// Creamos otro elemento botón pero usando React
const button = React.createElement('button', null,'Like')

// Creamos un elemento div que será el contenedor de los otros elementos React
const divContainer = React.createElement('div', null, [message, button])

// Finalmente renderizamos los elementos React
root.render(divContainer)

/*
Crear aplicaciones de esta forma no es muy práctica que digamos, algo que usaremos
es JSX, que es una formade declarar nuestros elementos como si fuera "html" pero en 
el fondo usando simplemente JavaScript, eso gracias a SWC.
*/
