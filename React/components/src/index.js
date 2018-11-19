import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Bissy"
        timeAgo="Today at 4:30PM"
        comment="Wow"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Raja"
        timeAgo="Today at 2:30PM"
        comment="No way!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Naji"
        timeAgo="Today at 1:30PM"
        comment="Savage!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Naia"
        timeAgo="Today at 12:30PM"
        comment="Whoops"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
