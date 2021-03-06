import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      filteredTodoList: [],
      filterQuery: '',
      isFiltered: false,
      localStorageKey: 'todoList'
    }
  }

  componentDidMount() {
    this.getValuesFromLocalStorage();
  }

  getValuesFromLocalStorage() {
    for (let localStorageKey in this.state) {
      if (localStorage.hasOwnProperty(localStorageKey)) {
        let value = localStorage.getItem(localStorageKey);
        try {
          value = JSON.parse(value);
          this.setState({ [localStorageKey]: value });
        } catch (error) {
          this.setState({ [localStorageKey]: value });
        }
      }
    }
  }

  addToLocalStorage() {
    localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
  }

  addTodoTask = taskToAdd => {
    const newTodo = {
      task: taskToAdd,
      id: Date.now(),
      complete: false
    }
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    }, () => this.addToLocalStorage());
    
  }

  filterOnChange = filterQuery => {
    (filterQuery !== "") ? this.setState({ isFiltered: true }) : this.setState({ isFiltered: false });
    let filteredTodoList = this.state.todoList.filter( item => {
      let taskName = item.task.toLowerCase();
      return taskName.indexOf( filterQuery.toLowerCase() ) !== -1;
    });
    this.setState({ filteredTodoList: filteredTodoList });
  }

  toggleTodoItemDone = event => {
    let indexVal = this.state.todoList.findIndex( obj => parseInt(obj.id) === parseInt(event.target.id) );
    let cloneOfArray = [...this.state.todoList];
    cloneOfArray[indexVal].complete = !cloneOfArray[indexVal].complete;
    this.setState({
      todoList: cloneOfArray
    })
  }

  removeCompletedItemsFromList = event => {
    event.preventDefault();
    let doneList = [...this.state.todoList].filter( item => item.complete === false);
    this.setState({
      todoList: doneList
    }, () => this.addToLocalStorage())
  }

  onFilterChange = event => {
    this.setState({
      filterQuery: event.target.value
    }, () => this.filterOnChange(this.state.filterQuery))
  }

  clearFilter = () => {
    this.setState({
      filterQuery: ''
    }, () => this.filterOnChange(this.state.filterQuery))
  }

  render() {
    let functionObj = {
      filterOnChange: this.filterOnChange,
      formSubmit: this.addTodoTask,
      actionOnClick: this.toggleTodoItemDone,
      clearComplete: this.removeCompletedItemsFromList,
      clearFilter: this.clearFilter,
      onFilterChange: this.onFilterChange
    }
    return (
      <TodoList theState={this.state} theFunctions={functionObj} />
    );
  }
}

export default App;
