import React from 'react';

class TodoForm extends React.Component {
  render() {
    return(
      <div className="container-form">
        <h2>Add a task to &ldquo;todo&rdquo; list:</h2>
        <form className="form-todo">
          <label htmlFor="task">
            <input onChange={this.props.actionOnChange} type="text" name="task" id="task" placeholder="New Todo Item" />
          </label>
          <label htmlFor="complete">
            <input type="hidden" name="complete" id="complete" value={false} />
          </label>
          <button onClick={this.props.formOnSubmit} type="submit" value="submit">Add New Todo</button>
          <button onClick={this.props.clearComplete}>Clear Completed</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;