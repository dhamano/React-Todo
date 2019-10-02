import React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <input type="text" value={this.props.theState.filterQuery} onChange={this.props.functions.onFilterChange} name="filter" id="filter" placeholder="Filter for Todo List" />
        <button onClick={this.clearFilter} >Clear Filter</button>
      </React.Fragment>
    )
  }
}

export default Filter;