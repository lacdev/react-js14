import React, { useState } from 'react'

import './Navbar.css'

const Navbar = () => {
  const [active, setActive] = useState('')

  const items = [
    { name: 'Acerca' },
    { name: 'Alumnos' },
    { name: 'Empresas' },
    { name: 'Cursos' },
    { name: 'Login' },
  ]

  const list = items.map(({ name }) => {
    return (
      <li
        key={name}
        onClick={() => setActive(name)}
        className={active === name ? 'active' : ''}
      >
        {name}
      </li>
    )
  })

  return (
    <div className="nav-container">
      <ul className="nav-list">{list}</ul>
    </div>
  )
}

export { Navbar }
