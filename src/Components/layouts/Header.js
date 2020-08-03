import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>
        <h1> Todo list </h1>
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