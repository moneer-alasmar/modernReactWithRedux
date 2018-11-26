import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="text">Enter name:</label>
          <input name="text" type="text" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
