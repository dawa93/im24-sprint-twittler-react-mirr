import React from "react";
import RenderMsgs from "./renderMsgs";
import Logo from "./logo";
import Head from "./head";
import TweetButton from "./button";

class Twittler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newContentInput: "",
      newWriterInput: "",
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

  handleContentChange = (e) => {
    // this.setState({ newInput: e.target.value });
    this.setState((state) => ({ newContentInput: e.target.value }));
    console.log(this.state.newContentInput);
  };

  handleWriterChange = (e) => {
    // this.setState({ newInput: e.target.value });
    this.setState((state) => ({ newWriterInput: e.target.value }));
    console.log(this.state.newWriterInput);
  };

  clickHandler = () => {
    let msg = {
      uuid: this.state.tweets.length + 1,
      writer: this.state.newWriterInput,
      date: new Date().toLocaleDateString(),
      content: this.state.newContentInput,
    };

    // this.setState({ tweets: this.state.tweets.concat(msg) });
    // 위에꺼 사용해도 되지만, 아래걸 사용하는걸 권장함 !
    this.setState((state) => ({
      // push 대신 concat을 사용하자 !
      tweets: state.tweets.concat(msg),
    }));
    alert("새로운 트윗을 보냈습니다.");
  };

  componentDidMount() {}
  componentDidUpdate() {
    // alert("새로운 트윗을 보냈습니다.");
  }

  render() {
    return (
      <div>
        <Logo />
        <div className="inputBox">
          <Head
            onChange={this.handleContentChange}
            handleWriterChange={this.handleWriterChange}
          />
          <TweetButton clickHandler={this.clickHandler} />
        </div>
        <RenderMsgs data={this.state.tweets} />
      </div>
    );
  }
}

export default Twittler;
