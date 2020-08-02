import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItems extends Component {

  getStyle = () => {
    if(this.props.todo.completed){
      return{
        textDecoration: "line-through"
      }
    }
    else{
      return{
        textDecoration: "none"
      }
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