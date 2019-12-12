import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
        <div></div>
        <div></div>
        <div></div>
        <ApprovalCard/>
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45 PM"
        content={faker.lorem.sentence()}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00 AM"
        content={faker.lorem.sentence()}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00 PM"
        content={faker.lorem.sentence()}
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
