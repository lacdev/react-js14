import { useState, useEffect } from 'react'
import React from 'react'

const capitalize = (string) => {
  if (!string) return ''

  return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

const Greeting = ({ firstName, lastName = '' }) => {
  const [fakeName, setFakeName] = useState('Manuel Ramon')
  const [isLoading, setIsLoading] = useState(true)

  console.log('Hola el componente se monto')

  const _firstName = capitalize(firstName)
  const _lastName = capitalize(lastName)

  useEffect(() => {
    console.log('Hola el componente ya cargo')
    setTimeout(() => setIsLoading(false), 3000)
  }, [])

  return (
    <div>
      <h1>Hola {fakeName}</h1>
      <span>
        {isLoading ? 'El componente esta cargando' : 'El componente ya cargo'}
      </span>
    </div>
  )
}

export { Greeting }
