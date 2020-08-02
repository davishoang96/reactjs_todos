import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItems extends Component {
  render() {
    return(
      <h3>{this.props.todo.title}</h3>
    )
  }
}

TodoItems.propTypes = {
  todos: PropTypes.array.isRequired
}