import React from "react";
// option 1
// function SingleTweet(props) {
//   return (
//     <div>
//       <ul>
//         <li>{props.writer}</li>
//         <li>{props.date}</li>
//         <li>{props.content}</li>
//       </ul>
//     </div>
//   );
// }

// option 2
function SingleTweet({ writer, content, date }) {
  return (
    <div>
      <ul className="tweetBox">
        <li>{writer}</li>
        <li>{date}</li>
        <li>{content}</li>
      </ul>
    </div>
  );
}

export default SingleTweet;
