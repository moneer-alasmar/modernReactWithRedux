import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    // THIS IS THE ONLY TIME WE DO A DIRECT ASSIGNMENT TO THIS.STATE
    this.state = {
      lat: null,
      errorMessage: ""
    };

    // Geolocation API takes in 2 call backs, the first for successful and the second for failure.
    window.navigator.geolocation.getCurrentPosition(
      // Success Callback
      position => {
        // ALWAYS USE SET STATE TO UPDATE STATE
        this.setState({ lat: position.coords.latitude });
      },
      // Failure Callback
      err => this.setState({ errorMessage: err.message })
    );
  }
  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));