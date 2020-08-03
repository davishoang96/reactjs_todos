import React, { Component } from 'react'

import PropTypes from 'prop-types'

export default class AddTodo extends Component {

  state = {
    title: ''
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{display: 'flex'}}>

          <input 
          type="text" 
          name="title" 
          placeholder="What todo next...?" 
          style={{flex: 10, padding: '5px'}} 
          value={this.state.title}
          onChange={this.onChange}
          />

          <input 
          type="submit" 
          value="Submit" 
          className="btn" 
          style={{flex: 1}} />

        </form>
      </div>
    )
  }
}
