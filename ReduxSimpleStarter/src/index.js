// IMPORTING REACT
import React from 'react';

// IMPORTING REACT DOM
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDIkfflCWAPULhAZ4kKl2EMR0AyuEuCfMU';

// CREATE A NEW COMPONENT. THIS COMPONENT SHOULD PRODUCE HTML
const App = () => {
  return <div>Hi</div>;
}

// TAKE COMPONENT'S GENERATED HTML AND PUT IT ON THE PAGE(IN THE DOM)
ReactDOM.render(<App />, document.querySelector('.container'));