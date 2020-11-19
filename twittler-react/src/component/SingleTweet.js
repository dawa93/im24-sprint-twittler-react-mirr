import React from "react";
// option 1
// let SingleTweet = (props) => (
//   <div className="tweetBox">
//     <ul className="tweet">
//       <li>{props.writer}</li>
//       <li>{props.date}</li>
//       <li>{props.content}</li>
//     </ul>
//   </div>
// );
//

// option 2
let SingleTweet = ({ writer, content, date }) => (
  <div className="tweetBox">
    <ul className="tweet">
      <span>
        <li className="writer">{writer}</li>
      </span>
      <span>
        <li className="date">{date}</li>
      </span>
      <li className="content">{content}</li>
    </ul>
  </div>
);

export default SingleTweet;
