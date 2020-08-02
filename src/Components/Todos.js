import React, { Component } from 'react'
import TodoItems from './TodoItems'
import PropTypes from 'prop-types'

export default class Todos extends Component {
  render() {
    return this.props.todos.map((todo)=>(
      <TodoItems key={todo.id} todo={todo} />
    ))
  }
}

// To run typechecking on the props for a component, 
// you can assign the special propTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}