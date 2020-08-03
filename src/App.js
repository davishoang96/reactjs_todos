import React, { Component } from 'react';
import Todos from './Components/Todos'
import { render } from '@testing-library/react';

export class App extends Component {

  state = {
    todos: [
      {
        id: "1",
        title: "Clean the floor",
        completed: false
      },
      {
        id: "2",
        title: "Ask for Phd Schoolarship",
        completed: true
      },
      {
        id: "3",
        title: "Send email to Brianna",
        completed: false
      },
      {
        id: "4",
        title: "Complete the paragraph",
        completed: false
      }
    ]
  }


  markCompleted = (id) => {
    console.log(id)
  }


  render() {
    console.log(this.state.todos)
    return (
      
      <div className="App">
        <header className="App-header">
          <Todos todos={this.state.todos} markCompleted={this.markCompleted} />
        </header>
      </div>
    )
  }
}

export default App

