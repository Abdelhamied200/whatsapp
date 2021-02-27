import React, { useEffect } from "react";
import ChatArea from "../../containers/chat";
import SideBar from "../../containers/sideBar";
import Cookie from "../../helpers/cookie";

import "./home.scss";

const Home = (props) => {
  useEffect(() => {
    let username = Cookie.get("username");
    if (!username) {
      props.history.push("/login");
    }
  }, [props]);

  return (
    <div className="page">
      <div className="home">
        <SideBar history={props.history} />
        <ChatArea />
      </div>
    </div>
  );
};

export default Home;
