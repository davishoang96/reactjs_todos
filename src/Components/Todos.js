import React, { Component } from 'react'
import TodoItems from './TodoItems'

export default class Todos extends Component {
  render() {
    return this.props.todos.map((todo)=>(
      <TodoItems todo={todo} />
    ))
  }
}
