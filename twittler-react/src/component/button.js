import React from "react";

let TweetButton = (props) => {
  return (
    <button className="sendBtn" onClick={props.clickHandler}>
      Send Tweet
    </button>
  );
};

export default TweetButton;
