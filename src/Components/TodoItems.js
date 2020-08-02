import React, { Component } from 'react'

export default class TodoItems extends Component {
  render() {
    return(
      <h3>{this.props.todo.title}</h3>
    )
  }
}
