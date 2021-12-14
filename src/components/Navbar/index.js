import React, { useState } from 'react'
import { NavbarItem } from '../List'

import './Navbar.css'

const Navbar = () => {
  const [active, setActive] = useState('')

  // const handleClick = () => {
  //   setActive(name)
  // }

  const items = [
    { name: 'Acerca' },
    { name: 'Alumnos' },
    { name: 'Empresas' },
    { name: 'Cursos' },
    { name: 'Login' },
  ]

  // const ulItems = items.map(({ name }) => {
  //   return (
  //     <NavbarItem
  //       text={name}
  //       key={name}
  //       // onClick={setActive(name)}
  //       className={active === name ? 'active' : ''}
  //     />
  //   )
  // })

  return (
    <div className="nav-container">
      <ul className="nav-list">
        {items.map((item) => {
          return <NavbarItem key={item.name} text={item.name} />
        })}
      </ul>
    </div>
  )
}

export { Navbar }
