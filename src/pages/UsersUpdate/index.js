import React from 'react'
import { useState } from 'react/cjs/react.development'
import { Input } from '../../components/input'
import { updateUser } from '../../services/users'

export default function UpdateUsers() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [ocupation, setOcupation] = useState('')
  const [birthdate, setBirthdate] = useState('')

  const cleanForm = () => {
    setFirstName('')
    setLastName('')
    setGender('')
    setOcupation('')
    setBirthdate('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const data = {
        firstName,
        lastName,
        gender,
        ocupation,
        birthdate,
      }
      await updateUser(data)
      cleanForm()
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div>
      <div className="container">
        <h1>Actualiza un Koder</h1>
        <form onSubmit={handleSubmit}>
          <Input
            min={1}
            max={5}
            type="text"
            id="firstName"
            label="First Name"
            value={firstName}
            setValue={setFirstName}
          />
          <Input
            min={1}
            max={20}
            type="text"
            id="lastName"
            label="Last Name"
            value={lastName}
            setValue={setLastName}
          />
          <Input
            type="text"
            id="gender"
            label="Gender"
            value={gender}
            setValue={setGender}
          />
          <Input
            type="text"
            id="ocupation"
            label="Ocupation"
            value={ocupation}
            setValue={setOcupation}
          />
          <Input
            type="date"
            id="birthdate"
            label="birthdate"
            value={birthdate}
            setValue={setBirthdate}
          />
          <button type="submit">Actualizar Usuario</button>
        </form>
      </div>
    </div>
  )
}
