import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

//Pages
import App from './App'
import Users from './pages/Users'
import UsersNew from './pages/UsersNew'
import UsersUpdate from './pages/UsersUpdate'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/holi" element={<h1>Holi</h1>} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/new" element={<UsersNew />} />
        <Route path="/users/update" element={<UsersUpdate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
