import React, { Component } from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo'

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with katherine',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      },
    ]
  }

  //Toggle Complete
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {  //  when the button is clicked, because the id is bound to the delTodo in the TodoItem it takes 
        if (todo.id === id) {                                 // in the id then argument of the function. in the function is the filter method.using this in
          todo.completed = !todo.completed                  // method we return any vale that is not (!==) equal to that id that has been plugged 
        }
        return todo;
      })
    });
  }

  //Delete To do
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  //Add Todo
  addTodo = (title) => {
    var last =  function(array, n) {
      if (array == null) 
        return void 0;
      if (n == null) 
         return array[array.length - 1];
      return array.slice(Math.max(array.length - n, 0));  
      };
    
    const newTodo={
      id: (last(this.state.todos).id)+1,
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          {/* line bellow passes the todos that are in the app component state to the todos component as a property. this information can now be accessed in the Todos.js*/}
          <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo} />

        </div>

      </div>
    );
  }
}

export default App;


//54:58