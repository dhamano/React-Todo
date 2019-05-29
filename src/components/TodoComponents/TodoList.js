import React from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';

import './Todo.scss';

class TodoList extends React.Component {
  render() {
    return(
      <div className="container-todolist">
        <TodoForm actionOnChange={this.props.actionOnChange} setCreate={this.props.setOnCreate} formOnSubmit={this.props.formSubmit} clearComplete={this.props.clearComplete} />
        <ul className="todolist">
          <li><h1>Todo List</h1></li>
          <Todo todoList={this.props.todoTaskList.todoList} actionOnClick={this.props.actionOnClick} />
        </ul>
      </div>
    )
  }
}

export default TodoList;