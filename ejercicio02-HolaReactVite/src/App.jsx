import "./style.css";

const MySuperButton = () => {
  return <button className="super-btn">
    Super Botón
  </button>
}

const user = {
  name: "done",
  nickname: "doneber",
  githubURL: "https://github.com/doneber"
}

function App() {
  return (
    <>
      <h2>Usuario</h2>
      <ul>
        <li><b>Nombre: </b> { user.name }</li>
        <li><b>Nickname: </b>{ user.nickname }</li>
        <li><b>Enlace de GitHub: </b> <a href={ user.githubURL }>{ user.githubURL }</a> </li>        
      </ul>
      <MySuperButton />
    </>
  )
}

export default App
