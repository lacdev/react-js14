import React from 'react'

const Input = ({ id, label, value, setValue }) => {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        id={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  )
}

export { Input }
