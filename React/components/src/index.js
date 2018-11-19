import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Bissy" />
      <CommentDetail author="Raja" />
      <CommentDetail author="Naji" />
      <CommentDetail author="Naia" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
