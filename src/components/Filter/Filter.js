import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterQuery: ''
    }
  }

  onChange = event => {
    this.setState({
      filterQuery: event.target.value
    }, () => this.props.filterOnChange(this.state.filterQuery))
  }

  clearFilter = () => {
    this.setState({
      filterQuery: ''
    }, () => this.props.filterOnChange(this.state.filterQuery))
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" value={this.state.filterQuery} onChange={this.onChange} name="filter" id="filter" placeholder="Filter for Todo List" />
        <button onClick={this.clearFilter}>Clear Filter</button>
      </React.Fragment>
    )
  }
}

export default Filter;