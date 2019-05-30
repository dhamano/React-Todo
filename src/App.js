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
          complete: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          complete: false
        }
      ],
      filteredTodoList: [],
      isFiltered: false,
      task: '',
      id: '',
      complete: false
    }
  }

  addTodoTask = event => {
    event.preventDefault();
    if(this.state.task === '') {
      let field = document.querySelector('#task');
      field.classList.add('missing-error');
      field.setAttribute('placeholder','Please Enter a Task');
      return false;
    }
    document.getElementById('task').value = "";
    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      complete: this.state.complete
    }
    this.setState({
      todoList: [...this.state.todoList, newTodo],
      task: ''
    });
  }

  onChangeFilter = event => {
    let filterQuery = event.target.value;
    let filteredTodoList = this.state.todoList;
    (filterQuery !== "") ? this.setState({ isFiltered: true }) : this.setState({ isFiltered: false });
    filteredTodoList = filteredTodoList.filter( item => {
      let taskName = item.task.toLowerCase();
      return taskName.indexOf( filterQuery.toLowerCase() ) !== -1;
    });
    this.setState({ filteredTodoList: filteredTodoList });
  }

  onClickClear = event => {
    document.querySelector('#filter').value = "";
    this.setState({ isFiltered: false })
    let field = document.querySelector('#task');
    field.classList.remove('missing-error');
    field.setAttribute('placeholder','New Todo Item');
  }

  handleOnClick = event => {
    let indexVal = this.state.todoList.findIndex( obj => parseInt(obj.id) === parseInt(event.target.id) );
    let cloneOfArray = [...this.state.todoList];
    cloneOfArray[indexVal].complete = !cloneOfArray[indexVal].complete;
    this.setState({
      todoList: cloneOfArray
    })
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
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
      filterOnChange: this.onChangeFilter,
      clearOnClick: this.onClickClear,
      actionOnChange: this.handleOnChange,
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
