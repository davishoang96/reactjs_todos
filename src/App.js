import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Components/Todos'
import { render } from '@testing-library/react';

export class App extends Component {

  state = {
    todos: [
      {
        id: "1",
        title: "Clean the floor",
        done: "False"
      },
      {
        id: "2",
        title: "Ask for Phd Schoolarship",
        done: "True"
      },
      {
        id: "3",
        title: "Send email to Brianna",
        done: "False"
      },
      {
        id: "4",
        title: "Complete the paragraph",
        done: "False"
      }
    ]
  }

  render() {
    console.log(this.state.todos)
    return (
      
      <div className="App">
        <header className="App-header">
          <Todos todos={this.state.todos} />
        </header>
      </div>
    )
  }
}

export default App

