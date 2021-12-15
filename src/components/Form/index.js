import { useEffect, useState } from 'react'

import './Form.css'

const Form = () => {
  const [creditCardNumber, setCreditCardNumber] = useState('')
  const [name, setName] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [cvv, setCvv] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleCCNumber = (event) => {
    setCreditCardNumber(event.target.value)
  }

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleExpiration = (event) => {
    setExpirationDate(event.target.value)
  }

  const handleCvv = (event) => {
    setCvv(event.target.value)
  }

  return (
    <div>
      <form>
        <div className="form-container">
          <label htmlFor={creditCardNumber}>
            Credit Card Number:{creditCardNumber}
          </label>
          <input
            id="creditCardNumber"
            type="number"
            onChange={handleCCNumber}
            value={creditCardNumber}
          />

          <label htmlFor={name}>Name:{name}</label>
          <input id="name" type="text" onChange={handleName} value={name} />

          <label htmlFor={expirationDate}>
            Expiration Date:{expirationDate}
          </label>
          <input
            id="expiration"
            type="text"
            onChange={handleExpiration}
            value={expirationDate}
          />

          <label htmlFor={cvv}>CVV:{cvv}</label>
          <input id="cvv" type="number" onChange={handleCvv} value={cvv} />
          <button type="submit" className="btn" onSubmit={handleSubmit}>
            Enviar Datos
          </button>
        </div>
      </form>
    </div>
  )
}

export { Form }
