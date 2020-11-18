import React from "react";
import SingleTweet from "./SingleTweet";

class Twittler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          uuid: 1,
          writer: "김코딩",
          date: "2020-10-10",
          content: "안녕 리액트",
        },
        {
          uuid: 2,
          writer: "박해커",
          date: "2020-10-12",
          content: "좋아 코드스테이츠!",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div>작성자 : </div>
        <div className="inputBox">
          <div>
            <textarea></textarea>
            <button>새 글 쓰기</button>
          </div>
        </div>

        <div className="tweetsBox">
          {this.state.tweets.map((msg) => (
            <SingleTweet
              key={msg.uuid}
              writer={msg.writer}
              date={msg.date}
              content={msg.content}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Twittler;
