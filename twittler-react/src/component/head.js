import React from "react";

let Head = (props) => (
  <div>
    <div className="wirterInfo">
      <span className="writer">Writer : </span>
      <input
        type="text"
        className="writerBox"
        placeholder="이름을 적어주세요"
        onChange={props.handleWriterChange}
      ></input>
    </div>
    <div className="contentBox">
      <span>content :</span>
      <textarea
        placeholder="내용을 적어주세요"
        onChange={props.handleContentChange}
      ></textarea>
    </div>
  </div>
);

export default Head;
