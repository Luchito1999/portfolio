import React from 'react'
import {useState} from 'react'

function Contador() {

    const [count, setCount] = useState (0) {

    }


  return (
    <div>
      <h1>Contador React</h1>
      <h1>{count}</h1>

      <button id="aumentar" onClick={() => ((count)+ 1 )}> AUMENTAR </button>
      <button id="resetear" onClick={() => ((count) = 0)}> RESETEAR </button>
      <button id="disminuir" onClick={() => ((count) - 1)}> DISMINUIR </button>

    </div>
  )
}

export default Contador
