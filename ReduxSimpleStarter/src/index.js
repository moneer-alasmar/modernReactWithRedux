// IMPORTING REACT
import React, { Component } from 'react';

// IMPORTING REACT DOM
import ReactDOM from 'react-dom';

// IMPORT SEARCHBAR
import SearchBar from './components/search_bar';

// IMPORT CONFIG
import { myConfig } from './components/config';

// IMPORT YOUTUBE-API-SEARCH
import YTSearch from 'youtube-api-search';

const API_KEY = myConfig.API_KEY;

// CREATE A NEW COMPONENT. THIS COMPONENT SHOULD PRODUCE HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'cheetahs'}, (videos) => {
      this.setState({ videos });
    });
  }
  render () {
    return (
    <div>
      <SearchBar />
    </div>
    );
  }
}

// TAKE COMPONENT'S GENERATED HTML AND PUT IT ON THE PAGE(IN THE DOM)
ReactDOM.render(<App />, document.querySelector('.container'));