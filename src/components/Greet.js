import React, { Component } from 'react'

class Greet extends Component {
  render() {
    return <div>Hola {this.props?.firstName}</div>
  }
}

export default Greet
