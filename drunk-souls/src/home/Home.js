import React from 'react'
import { Nav } from 'react-bootstrap'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Welcome to Drunk Souls!</h1>
        <br/>
        <Nav.Link href="" className="btn btn-secondary navbar-dark btn-end">Host Game</Nav.Link>
        <br/>
        <Nav.Link href="/covenants/blades-of-the-darkmoon"  className="btn btn-secondary navbar-dark btn-end">Git Drunk</Nav.Link>
      </div>
    )
  }
}
export default Home