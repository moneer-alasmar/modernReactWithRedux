import React, { Component } from 'react';

// FUNCTION BASEDC COMPONENT
// const SearchBar = () => {
//   return <input />;
// };

// CLASS BASED COMPONENT
class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }

  // EVENT HANDLER
  // handleInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;