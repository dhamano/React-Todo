import React from 'react';

const Todo = props => {
  return(
    props.todoList.map( todoItem => {
      let str = '';
      ( todoItem.complete ) ? str = 'Done' : str = 'Todo';
      return <li key={todoItem.id} id={todoItem.id} onClick={props.actionOnClick} className={str.toLowerCase()}>{todoItem.task}</li>
    })
  )
}

export default Todo;