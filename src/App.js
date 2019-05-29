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
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358, //13
          completed: false
        }
      ],
      task: '',
      id: '',
      complete: false
    }
    this.addTodoTask = this.addTodoTask.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
  }

  addTodoTask = event => {
    event.preventDefault();
    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      complete: this.state.complete
    }
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  }

  handleOnClick = event => {
    event.target.classList.toggle('done');
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClearCompleted = event => {
    event.preventDefault();
    let doneList = document.querySelectorAll('li.done');
    doneList.forEach(function( node ) { node.parentNode.removeChild( node ); }) 
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <TodoList todoTaskList={this.state} actionOnChange={this.handleOnChange} formSubmit={this.addTodoTask} actionOnClick={this.handleOnClick} clearComplete={this.handleClearCompleted} />
    );
  }
}

export default App;
