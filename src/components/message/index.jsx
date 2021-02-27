import React from "react";

import "./message.scss";

const Message = (props) => {
  return (
    <div
      className={
        props.me === true ? "message__container me" : "message__container"
      }
    >
      <p className="username">{props.name}</p>
      <div className="msg">
        <p className="content">{props.msg}</p>
        <p className="timestamp">{props.timestamp}</p>
      </div>
    </div>
  );
};

export default Message;
