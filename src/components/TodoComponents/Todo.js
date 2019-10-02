import React from 'react';

const Todo = props => {
  ///*
  return(
    props.todoList.map( todoItem => {
      let str = '';
      if( todoItem.completed ) {
        str = 'Done';
      } else {
        str = 'Todo';
      }
      return <li key={todoItem.id} onClick={props.actionOnClick} className={str.toLowerCase()}>{todoItem.task}</li>
    })
  )
  //*/
}

export default Todo;