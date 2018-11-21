import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

const App = () => {
  // Geolocation API takes in 2 call backs, the first for successful and the second for failure.
  window.navigator.geolocation.getCurrentPosition(
    // Success Callback
    position => console.log(position),
    // Failure Callback
    err => console.log(err)
  );

  return (
    <div>
      <h1>Hello</h1>
      <SeasonDisplay />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
