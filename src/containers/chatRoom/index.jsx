import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Message from "../../components/message";

import "./chatroom.scss";

const ChatRoom = (props) => {
  useEffect(() => {
    let scrollableArea = document.querySelector(".area");
    scrollableArea.addEventListener("scrollBot", () => {
      if (
        scrollableArea.scrollHeight - scrollableArea.scrollTop < 800 ||
        scrollableArea.scrollTop === 0
      )
        scrollableArea.scrollTo(0, scrollableArea.scrollHeight);
    });
  }, []);
  return (
    <div className="chatroom">
      <div className="head">
        <div className="about">
          <div className="avatar">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </div>
          <div className="room__info">
            <h3 className="name">{props.name}</h3>
            <p className="timestamp">{props.timestamp}</p>
          </div>
        </div>
        <div className="actions">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="area">
        {props.messages.map((msg, i) => (
          <Message {...msg} key={msg.name + "-" + i} />
        ))}
      </div>
    </div>
  );
};

export default ChatRoom;
