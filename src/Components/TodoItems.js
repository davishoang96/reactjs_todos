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
    const { id,title } = this.props.todo;
    return(
      <div style={this.getStyle()}>
        <h3>
          {/* check Todos js  */}
          <input type="checkbox" onChange={this.props.markCompleted.bind(this,id)} /> {''}
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
        </h3>
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

const btnStyle = {
  backgroundColor: "#ff0000",
  color: '#fff',
  border: 'none',
  padding: '5px, 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
  textAlign: 'center',
}