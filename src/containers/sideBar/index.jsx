import React from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import { Avatar, IconButton } from "@material-ui/core";

import SideBarChat from "../../components/sidebarChat";

import "./sidebar.scss";
import Cookie from "../../helpers/cookie";

const SideBar = (props) => {
  return (
    <div className="sidebar">
      <div className="head">
        <div className="avatar">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
        <div className="actions">
          <IconButton onClick={() => logout(props)}>
            <ExitToAppIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="search__container">
        <div className="search">
          <SearchOutlined />
          <input placeholder="search for something..." type="text" />
        </div>
      </div>
      <div className="chats">
        <h2>Chats</h2>
        <SideBarChat pic="/1.jpg" name="joe" msg="hello man" />
      </div>
    </div>
  );
};

const logout = (props) => {
  Cookie.remove("username");
  props.history.push("/login");
};

export default SideBar;
