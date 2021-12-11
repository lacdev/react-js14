import { useState } from 'react'

import '../Navbar/Navbar.css'

const List = () => {
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

  return <>{list}</>
}

export { List }
