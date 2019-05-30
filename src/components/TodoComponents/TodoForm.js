import React from 'react';

class TodoForm extends React.Component {
  render() {
    return(
      <div className="container-form">
        <h2>Add a task to &ldquo;todo&rdquo; list:</h2>
        <form className="form-todo">
          <label htmlFor="task">
            <input onChange={this.props.functions.actionOnChange} onClick={this.props.functions.clearOnClick} value={this.props.taskObj.task} type="text" name="task" id="task" placeholder="New Todo Item" />
          </label>
          <label htmlFor="complete">
            <input type="hidden" name="complete" id="complete" value={this.props.taskObj.complete} />
          </label>
          <button onClick={this.props.functions.formSubmit} type="submit" value="submit">Add New Todo</button>
          <button onClick={this.props.functions.clearComplete} value="clear">Clear Completed</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;