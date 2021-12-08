import React from 'react'

const capitalize = (string) => {
  if (!string) return ''

  return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

const Greeting = ({ firstName, lastName = '' }) => {
  const _firstName = capitalize(firstName)
  const _lastName = capitalize(lastName)

  return (
    <div>
      <h1>
        Hola {_firstName} {_lastName}
      </h1>
    </div>
  )
}

export { Greeting }
