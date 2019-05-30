import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          complete: true
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          complete: false
        },
        {
          task: 'Bake Fish',
          id: 1528817084359,
          complete: false
        },
        {
          task: 'Take Out Garbage',
          id: 1528817084360,
          complete: true
        }
      ],
      filteredTodoList: [],
      isFiltered: false
    }
  }

  addTodoTask = taskToAdd => {
    const newTodo = {
      task: taskToAdd,
      id: Date.now(),
      complete: false
    }
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  }

  filterOnChange = filterQuery => {
    let filteredTodoList = this.state.todoList;
    (filterQuery !== "") ? this.setState({ isFiltered: true }) : this.setState({ isFiltered: false });
    filteredTodoList = filteredTodoList.filter( item => {
      let taskName = item.task.toLowerCase();
      return taskName.indexOf( filterQuery.toLowerCase() ) !== -1;
    });
    this.setState({ filteredTodoList: filteredTodoList });
  }

  handleOnClick = event => {
    let indexVal = this.state.todoList.findIndex( obj => parseInt(obj.id) === parseInt(event.target.id) );
    let cloneOfArray = [...this.state.todoList];
    cloneOfArray[indexVal].complete = !cloneOfArray[indexVal].complete;
    this.setState({
      todoList: cloneOfArray
    })
  }

  handleClearCompleted = event => {
    event.preventDefault();
    let doneList = [...this.state.todoList].filter( item => item.complete === false);
    this.setState({
      todoList: doneList
    })
  }

  render() {
    let functionObj = {
      filterOnChange: this.filterOnChange,
      formSubmit: this.addTodoTask,
      actionOnClick: this.handleOnClick,
      clearComplete: this.handleClearCompleted
    }
    return (
      <TodoList theState={this.state} theFunctions={functionObj} />
    );
  }
}

export default App;
