import { useRef } from 'react';
import './App.css'


function App() {
  const inputRef = useRef(null)

  return (
    <>
      <input ref={inputRef} /><br /><br />
      <button onClick={() => inputRef.current.focus()}>
        Focus inout
      </button>
    </>
  )
}

export default App
