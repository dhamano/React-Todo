import React from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';

import Filter from '../Filter/Filter';

import './Todo.scss';

class TodoList extends React.Component {
  render() {
    let listToUse = []
    if(this.props.theState.isFiltered){
      listToUse = this.props.theState.filteredTodoList;
    } else {
      listToUse = this.props.theState.todoList;
    }
    return(
      <div className="container-todolist">
        <TodoForm clearOnClick={this.props.clearOnClick} taskObj={this.props.taskObj} actionOnChange={this.props.actionOnChange} setCreate={this.props.setOnCreate} formOnSubmit={this.props.formSubmit} clearComplete={this.props.clearComplete} />
        <ul className="todolist">
          <li><h1>Todo List <Filter onChange={this.props.filterOnChange} /></h1></li>
          <Todo todoList={listToUse} actionOnClick={this.props.actionOnClick} />
        </ul>
      </div>
    )
  }
}

export default TodoList;