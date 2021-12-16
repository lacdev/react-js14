import React from 'react'
import { useState } from 'react/cjs/react.development'
import { Input } from '../../components/input'

import './UsersNew.css'

export default function UsersNew() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  // const handleFirstName = (event) => setFirstName(event.target.value)
  // const handleLastName = (event) => setLastName(event.target.value)

  return (
    <div className="container">
      <h1>Crea un usuario</h1>
      <form>
        <Input
          id="firstName"
          label="firstName"
          value={firstName}
          setValue={setFirstName}
        />
        <Input
          id="lastName"
          label="lastName"
          value={lastName}
          setValue={setLastName}
        />
      </form>
    </div>
  )
}
