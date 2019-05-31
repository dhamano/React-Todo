import React from 'react';

const Todo = props => {
  return(
    props.todoList.map( todoItem => {
      return <li key={todoItem.id} id={todoItem.id} onClick={props.actionOnClick} className={`${( todoItem.complete ) ? 'done' : 'todo'}`}>{todoItem.task}</li>
    })
  )
}

export default Todo;