import React from 'react'

const Input = ({ type = 'text', id, label, value, setValue }) => {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  )
}

export { Input }
