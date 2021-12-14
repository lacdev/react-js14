import logo from './logo.svg'
import './App.css'

//components
import { Greeting } from './components/Greeting'
import { Calculator } from './components/Calculator'
import { Counter } from './components/Counter'
import { Navbar } from './components/Navbar'
import { Card } from './components/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting firstName="Oscar" lastName="Castillo" />
        <Counter />
      </header>
      <Navbar />
      <Card />
    </div>
  )
}

export default App
