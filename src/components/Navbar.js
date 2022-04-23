import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div style={{display : 'flex'}}>
            <h1> Movies App</h1>
            <h2 style={{marginTop : '0.7rem' , marginLeft : '2rem'}}>Favourites</h2>
      </div>
    )
  }
}

export default Navbar