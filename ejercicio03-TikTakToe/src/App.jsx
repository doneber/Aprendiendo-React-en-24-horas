import './App.css'

const Square = ({ value  }) => <button> { value  } </button>

const Board = () => (
  <>
    <div className="row">
      <Square value="1" />
      <Square value="2" />
      <Square value="3" />
    </div>
    <div className="row">
      <Square value="4" />
      <Square value="5" />
      <Square value="6" />
    </div>
    <div className="row">
      <Square value="7" />
      <Square value="8" />
      <Square value="9" />
    </div>
  </>
)

function App() {

  return (
    <>
      <Board />
    </>
  )
}

export default App
