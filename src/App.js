import React, { Component } from 'react';
import Todos from './Components/Todos'
import { render } from '@testing-library/react';
import Header from './Components/layouts/Header'

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
        completed: false
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

  // toggle completion for todo list item
  markCompleted = (id) => {
    this.setState({todos: this.state.todos.map(
      todo => {
        if (todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      }
    )})
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id )]})
  }


  render() {
    console.log(this.state.todos)
    return (
      
      <div className="App">
        <header className="App-header">
          <Header />
          <Todos todos={this.state.todos} markCompleted={this.markCompleted} delTodo={this.delTodo} />
        </header>
      </div>
    )
  }
}

export default App

