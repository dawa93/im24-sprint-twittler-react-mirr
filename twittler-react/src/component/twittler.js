import React from "react";
import SingleTweet from "./SingleTweet";

class Twittler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newInput: "",
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
    // this.handleChange.bind(this);
    // this.clickHandler.bind(this);
  }

  handleChange = (e) => {
    this.setState({ newInput: e.target.value });
    console.log(this.state.newInput);
  };

  clickHandler = () => {
    // console.log(this.state.newInput);
    let msg = {
      uuid: this.state.tweets.length + 1,
      writer: "DH",
      date: new Date().toLocaleDateString(),
      content: this.state.newInput,
    };

    this.setState((state) => ({
      tweets: state.tweets.concat(msg),
    }));
    alert("새로운 트윗을 보냈습니다.");
  };

  render() {
    return (
      <div>
        <div className="inputBox">
          <div>작성자 : </div>
          <div>
            <textarea onChange={this.handleChange}></textarea>
            <button onClick={this.clickHandler}>새 글 쓰기</button>
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
