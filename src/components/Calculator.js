import React from 'react'

const calculate = ({ a, b, operator }) => {
  if (!operator) return 'ERROR'
  if (!a || !b) return 'ERROR'
  if (Number.isNaN(a) || Number.isNaN(b)) return 'ERROR'
  if (b === 0 && operator === '/') return 'ERROR'

  const add = (a, b) => a + b
  const substract = (a, b) => a - b
  const multiply = (a, b) => a * b
  const divide = (a, b) => a / b

  if (operator === '+') return add(a, b)
  if (operator === '/') return divide(a, b)
  if (operator === '-') return substract(a, b)
  if (operator === '*') return multiply(a, b)
}

function Calculator({ a, b, operator }) {
  const total = calculate({ a, b, operator })
  return (
    <>
      <h1>{total}</h1>
    </>
  )
}

export { Calculator }
