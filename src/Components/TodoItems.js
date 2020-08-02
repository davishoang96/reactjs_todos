import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItems extends Component {

  getStyle = () => {
    return{
      background: "#f4f4f4",
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 
      'line-through' : 'none'
    }
  }

  render() {
    return(
      <div style={this.getStyle()}>
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