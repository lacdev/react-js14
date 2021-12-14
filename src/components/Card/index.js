import { useState, useEffect } from 'react'

import './Card.css'

export const Card = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character'
        )

        const data = await response.json()

        setCharacters(data.results)
      } catch (error) {
        console.log(error)
      }
    }

    getCharacters()
  }, [])

  const charactersList = characters.map(({ image, name, status, species }) => (
    <div className="card">
      <div>
        <img className="img-container" src={image} alt="Character" />
      </div>
      <div className="info-container">
        <p>Name: {name}</p>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
      </div>
    </div>
  ))

  return <div>{charactersList}</div>
}
