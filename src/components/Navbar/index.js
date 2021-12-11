import React, { useState } from 'react'
import { List } from '../List'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <List />
      </ul>
    </div>
  )
}

export { Navbar }
