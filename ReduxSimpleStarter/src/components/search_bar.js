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
      <div className="search-bar"> 
        <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;