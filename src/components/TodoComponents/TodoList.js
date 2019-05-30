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
        <TodoForm taskObj={this.props.theState} functions={this.props.theFunctions} />
        <ul className="todolist">
          <li><h1>Todo List <Filter filterOnChange={this.props.theFunctions.filterOnChange} theState={this.props.theState} /></h1></li>
          <Todo todoList={listToUse} actionOnClick={this.props.theFunctions.actionOnClick} />
        </ul>
      </div>
    )
  }
}

export default TodoList;