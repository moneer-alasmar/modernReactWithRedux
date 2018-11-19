import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Bissy" timeAgo="Today at 4:30PM" />
      <CommentDetail author="Raja" timeAgo="Today at 2:30PM" />
      <CommentDetail author="Naji" timeAgo="Today at 1:30PM" />
      <CommentDetail author="Naia" timeAgo="Today at 12:30PM" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
