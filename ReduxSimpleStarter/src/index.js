// IMPORTING REACT
import React from 'react';

// IMPORTING REACT DOM
import ReactDOM from 'react-dom';

// IMPORT SEARCHBAR
import SearchBar from './components/search_bar';

// IMPORT CONFIG
import { myConfig } from './components/config';

const API_KEY = myConfig.API_KEY;

// CREATE A NEW COMPONENT. THIS COMPONENT SHOULD PRODUCE HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// TAKE COMPONENT'S GENERATED HTML AND PUT IT ON THE PAGE(IN THE DOM)
ReactDOM.render(<App />, document.querySelector('.container'));