import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItems extends Component {
  render() {
    return(
      <div style={itemStyle}>
         <h3>{this.props.todo.title}</h3>
      </div>
    )
  }
}

TodoItems.propTypes = {
  todos: PropTypes.array.isRequired
}

const itemStyle = {
  backgroundColor: "#f4f4f4"
}