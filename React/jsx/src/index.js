// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

const getButtonText = () => "Click Me";

// Create a React Component
const App = () => {
  const labelText = "Enter name: ";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "purple", color: "white" }}>
        {getButtonText()}
      </button>
    </div>
  );
};

// Take the React Component and show it on the screen
ReactDOM.render(<App />, document.getElementById("root"));
