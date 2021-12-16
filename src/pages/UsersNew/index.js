import React from 'react'
import { useState } from 'react/cjs/react.development'
import { Input } from '../../components/input'

import './UsersNew.css'

export default function UsersNew() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [ocupation, setOcupation] = useState('')
  const [birthdate, setBirthdate] = useState('')

  // const handleFirstName = (event) => setFirstName(event.target.value)
  // const handleLastName = (event) => setLastName(event.target.value)

  return (
    <div className="container">
      <h1>Crea un usuario</h1>
      <form>
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
      </form>
    </div>
  )
}
