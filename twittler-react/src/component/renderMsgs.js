import React from "react";
import SingleTweet from "./SingleTweet";

let RenderMsgs = (props) => {
  // console.log(props.data);
  return (
    <div className="tweetsBox">
      {props.data.map((msg) => (
        <SingleTweet
          key={msg.uuid}
          writer={msg.writer}
          date={msg.date}
          content={msg.content}
        />
      ))}
    </div>
  );
};

export default RenderMsgs;
