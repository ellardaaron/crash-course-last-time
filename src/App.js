import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state ={
    todos: [
      {
        id:1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id:2,
        title: 'Dinner with katherine',
        completed: true
      },
      {
        id:3,
        title: 'Meeting with boss',
        completed: false
      },
    ]
  }
  
  //Toggle Complete
  toggleComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {  // // 
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  //Delete To do
  delTodo= (id) => {
    console.log(id)
  }
  
  render() {
  
    return (
      <div className="App">
        {/* line bellow passes the todos that are in the app component state to the todos component as a property. this information can now be accessed in the Todos.js*/}
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo}/> 
      </div>
    );
  }
}

export default App;


//54:58