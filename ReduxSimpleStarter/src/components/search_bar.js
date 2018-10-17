import React, { Component } from 'react';
import { myConfig } from './config';

const API_KEY = myConfig.API_KEY;

// FUNCTION BASEDC COMPONENT
// const SearchBar = () => {
//   return <input />;
// };

// CLASS BASED COMPONENT
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    return (
      <div> 
        <input onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;