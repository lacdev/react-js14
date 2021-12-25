import { render } from '@testing-library/react'
import React, { Component } from 'react'

class UserGreeting extends Component() {
  render() {
    return <h1>Welcome back!</h1>
  }
}

class GuestGreeting extends Component() {
  render() {
    return <h1>Please Sign up</h1>
  }
}

class Greeting extends Component() {
  constructor(props) {
    super(props)
  }

  isLoggedIn = this.props.isLoggedIn
 
    if (this.props.isLoggedIn) {
      return <UserGreeting />
    } else {
      return <GuestGreeting />
    }
    
    render() {
        return (<Greeting isLoggedIn={false} />)
        
    }
} 

// class SomeButton extends Component {
//   render() {
//     return <button>Some Button</button>
//   }
// }

// class Navbar extends Component {
//   constructor(props) {
//     super(props)

//     this.handleNavClick = this.handleNavClick.bind(this)
//     this.state = { isClicked: false }
//   }

//   handleNavClick() {
//     this.setState({ isClicked: true })
//   }

//   render() {
//     const isClicked = this.state.isClicked
//     let div

//     if (isClicked) {
//       div = <ConditionalDiv onClick={this.handleNavClick} />
//     } else {
//       div = <ConditionalDiv onClick={this.handleNavClick} />
//     }
//     return <div>{div}</div>
//   }
// }

// export default Navbar
