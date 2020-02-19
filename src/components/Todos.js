import React, { Component } from 'react';
import TodoItem from './TodoItem'; /*imports the TodoItem.js so we can pull from it*/
import PropTypes from 'prop-types'; /*imports prop types*/

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (  /*this properties which has been set to the array in app.js. todos is the array from app.js. map through displays each one*/
        <TodoItem key={todo.id} todo={todo} toggleComplete=  /*sets the id as the key to each item that the map function creates. passes todo property into TodoItem.js*/
        {this.props.toggleComplete} delTodo={this.props.delTodo}/>   /* still have to go up one more level to the app.js because that is where the state it */
        ));
    }
}

// PropTypes sets in stone what type of property something is because java likes messing stuff up
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;