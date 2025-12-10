import type { CSSProperties } from "react"

function App() {
  const style: CSSProperties = {
    textAlign: 'center',
    color: 'green',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '5px',
  }

  return (
    <>
      <h1 style={style}>Hello React.js :)</h1>
    </>
  )
}

export default App
