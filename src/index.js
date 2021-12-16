import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { browserRouter, Routes, Route, BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/holi" element={<h1>Holi</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
