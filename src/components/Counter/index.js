import React, { useState, useEffect } from 'react'

//Styles
import './Counter.css'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [otherCounter, setOtherCounter] = useState(0)

  useEffect(() => {
    console.log('Me ejecuto cada que cambia el estado otherCounter')
  }, [otherCounter])

  useEffect(() => {
    console.log('Me ejecuto solo la primera vez')
  }, [])

  useEffect(() => {
    console.log('Me ejecuto cada que cambia  counter')
    if (counter % 3 === 0 && counter > 0) {
      setOtherCounter(otherCounter + 1)
    }
  }, [counter])

  return (
    <div>
      <p>Counter: {counter}</p>
      <p>Counter 2: {otherCounter} </p>
      <button className="btn" onClick={() => setCounter(counter + 1)}>
        Add
      </button>
      <button className="btn2" onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>
    </div>
  )
}

export { Counter }
