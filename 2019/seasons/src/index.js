import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null
    };
  }
  render() {
    // Geolocation API takes in 2 call backs, the first for successful and the second for failure.
    window.navigator.geolocation.getCurrentPosition(
      // Success Callback
      position => console.log(position),
      // Failure Callback
      err => console.log(err)
    );
    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
