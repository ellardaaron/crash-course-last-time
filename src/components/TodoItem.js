import React, { Component } from 'react';
import PropTypes from 'prop-types'; /*imports prop types*/

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',

            textDecoration: this.props.todo.completed ? //these two lines basically say that if the property of completed is true then add line through text decoration and else it has no text decoration.
                'line-through' : 'none'
        }
    }

    render() {
        const {id, title}=this.props.todo; //destructors the todo property which would be the individual objects from the array and makes available the id and title
        return (
            <div style={this.getStyle()}>
                {/* bellow line makesTodoItem return the title value from the array that has been set as todo prop in App.js */}
                <p>
                    <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> {/*binds the id with this info and puts a button in the TodoItem.sets toggleComplete as a property. we then can go up to Todos.js and pass it to app.jsand onChange  (box is checked or unchecked it calls the toggleComplete method)*/}
                    {title} {/* displays the title property of the object */}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes sets in stone what type of property something is because java likes messing stuff up
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color:'#fff',
    border:'none',
    borderRadius: '50%',
    padding: '5px 8px',
    cursor:'pointer',
    float:'right'
}



export default TodoItem
