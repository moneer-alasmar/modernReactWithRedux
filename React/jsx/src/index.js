// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a React Component
const App = () => {
  return (
    <div>
      <label class="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "red" }}>Submit</button>
    </div>
  );
};

// Take the React Component and show it on the screen
ReactDOM.render(<App />, document.getElementById("root"));
