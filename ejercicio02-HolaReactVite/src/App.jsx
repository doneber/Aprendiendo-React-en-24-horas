import "./style.css";

const MySuperButton = () => {
  return <button className="super-btn">
    Super Botón
  </button>
}

const userList = [
  {
    id: 1,
    name: "done",
    nickname: "doneber",
    githubURL: "https://github.com/doneber",
    isGithubstar: true
  },
  {
    id: 2,
    name: "Linus",
    nickname: "torvalds",
    githubURL: "https://github.com/torvalds",
    isGithubstar: false
  },
  {
    id: 3,
    name: "Richard Stallman",
    nickname: "stallmandev",
    githubURL: "https://github.com/stallmandevUwU",
    isGithubstar: false
  },
]

function App() {
  return (
    <>
      <h2>Usuario</h2>
      {
        userList.map(user =>
        <ul key={ user.id }>
          <li><b>Nombre: </b> { user.name }</li>
          <li><b>Nickname: </b>{ user.nickname }</li>
          <li><b>Enlace de GitHub: </b> <a href={ user.githubURL }>{ user.githubURL }</a> </li>        
          { user.isGithubstar ? (
            <li>⭐ Es GitHub Star</li>
          ): (
            <li>No es GitHub star</li>
          )
          }
        </ul>
        )
      }
      <MySuperButton />
    </>
  )
}

export default App
