import { TimerSharp } from '@mui/icons-material'
import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log('Se ejecuta la primera vez cuando el componente se monta')
  }

  componentDidUpdate() {
    console.log('Se ejecuta cuando el componente se actualiza')
  }

  componentWillUnmount() {
    console.log('Se ejecuta cuando el componente se desmonta')
  }

  handleClick(event) {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    )
  }
}

export default Counter
