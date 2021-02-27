import { Avatar } from "@material-ui/core";
import React from "react";

import "./sidebarChat.scss";

const SideBarChat = (props) => {
  return (
    <div className="sidebar__chat">
      <div className="avatar">
        <Avatar alt="Remy Sharp" src={props.pic} />
      </div>
      <div className="content">
        <h4 className="name">{props.name}</h4>
        <p className="msg">{props.msg}</p>
      </div>
    </div>
  );
};

export default SideBarChat;
