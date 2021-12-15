import { useState, useEffect } from 'react'

import './Card.css'
import { getCharacters } from '../../services/characters'

export const Card = () => {
  const [characters, setCharacters] = useState([])
  const [data, setData] = useState(1)

  useEffect(() => {
    const list = async () => {
      const { info, results } = await getCharacters()
      console.log(results)
      setCharacters(results)
      setData(info)
    }

    list()
  }, [])

  console.log(data)
  const handleClick = (action) => {
    if (action === 'next') {
      console.log('next')
    }

    if (action === 'previous') {
      console.log('previous')
    }
  }

  const charactersList = characters.map(
    ({ id, image, name, status, species }) => (
      <div key={id} className="card">
        <div>
          <img className="img-container" src={image} alt="Character" />
        </div>
        <div className="info-container">
          <p>Name: {name}</p>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
        </div>
      </div>
    )
  )

  return (
    <div>
      <div>
        <button className="btn-previous" onClick={handleClick('previous')}>
          Previous
        </button>
        <button className="btn-next" onClick={handleClick('next')}>
          Next
        </button>
      </div>
      {charactersList}
    </div>
  )
}
