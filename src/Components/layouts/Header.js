import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>
        <h1> Todo list </h1>
        <Link style={{color: 'white'}} to="/">Home</Link> | <Link style={{color: 'white'}} to="/about">About</Link>
      </div>
    )
  }
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  fontFamily: 'monospace,monaco',

}