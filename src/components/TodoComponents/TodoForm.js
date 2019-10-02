import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: '',
      placeholder: 'Enter New Todo Item',
      error: false
    }
  }

  handleOnChange = event => {
    this.setState({
      task: event.target.value
    })
  }

  clearOnClick = event => {
    this.props.functions.clearFilter();
    this.setState({
      task: '',
      placeholder: 'Enter New Todo Item',
      error: false
    })
  }

  formSubmit = event => {
    event.preventDefault();
    if(this.state.task === '') {
      this.setState({
        placeholder: 'Please Enter a Task',
        error: true
      })
    } else {
      this.props.functions.formSubmit(this.state.task);
      this.setState({
        task: ''
      })
    }
  }

  render() {
    return(
      <div className="container-form">
        <h2>Add a task to &ldquo;todo&rdquo; list:</h2>
        <form className="form-todo">
          <label htmlFor="task">
            <input onChange={this.handleOnChange} onClick={this.clearOnClick} className={`${this.state.error ? 'error' : ''}`} value={this.state.task} placeholder={this.state.placeholder} type="text" name="task" id="task" />
          </label>
          <button onClick={this.formSubmit} type="submit" value="submit">Add New Todo</button>
          <button onClick={this.props.functions.clearComplete} value="clear">Clear Completed</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;