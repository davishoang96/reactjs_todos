import React, { Component } from 'react'

export default class Todos extends Component {
  render() {
    return this.props.todos.map((todos)=>(
      <h4>{todos.title}</h4>
    ))
  }
}
