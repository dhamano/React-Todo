import React from 'react';

const Filter = props => {
  return (
    <React.Fragment>
      <input type="text" onChange={props.onChange} name="filter" id="filter" placeholder="Filter for Todo Item" />
    </React.Fragment>
  )
}

export default Filter;