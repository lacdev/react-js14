import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import './Users.css'

//Services
import { getUsers, convertToArray } from '../../services/users'

const Card = () => {
  const [koders, setKoders] = useState([])

  useEffect(() => {
    const list = async () => {
      try {
        const response = await getUsers()
        console.log(response)
        const data = convertToArray(response)
        console.log(data)
        setKoders(data)
      } catch (error) {
        console.log(error)
      }
    }

    list()
  }, [])

  const koderList = koders.map(
    ({ id, data: { birthdate, firstName, gender, lastName, occupation } }) => {
      return (
        <div key={id} className="card">
          <div className="info-container">
            <p>Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Birthdate: {birthdate}</p>
            <p>Gender: {gender}</p>
            <p>Occupation: {occupation}</p>
          </div>
        </div>
      )
    }
  )

  return <div>{koderList}</div>
}

export default function Users() {
  return (
    <div>
      
      <div>
        <h1>Lista de Koders:</h1>
      </div>
      <Card />
    </div>
  )
}

export { Card }
