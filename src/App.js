import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./Components/Todos";
import { render } from "@testing-library/react";
import Header from "./Components/layouts/Header";
import AddTodo from "./Components/AddTodo";
import { v4 as uuid } from "uuid";
import About from "./Components/pages/About";

export class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Clean the floor",
        completed: false,
      },
      {
        id: uuid(),
        title: "Ask for Phd Schoolarship",
        completed: false,
      },
      {
        id: uuid(),
        title: "Send email to Brianna",
        completed: false,
      },
      {
        id: uuid(),
        title: "Complete the paragraph",
        completed: false,
      },
    ],
  };

  // toggle completion for todo list item
  markCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete todo item
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // Add todo item
  AddTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo AddTodo={this.AddTodo} />
                  <Todos
                    todos={this.state.todos}
                    markCompleted={this.markCompleted}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />

            <Route path="/about" component={About}></Route>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
