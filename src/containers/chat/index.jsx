import React, { useState, useEffect } from "react";
import ChatRoom from "../chatRoom";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import MicOutlinedIcon from "@material-ui/icons/MicOutlined";
import "./chat.scss";

import axios from "../../axios";
import Pusher from "pusher-js";
import Cookie from "../../helpers/cookie";

const ChatArea = (props) => {
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    axios
      .get("/messages/sync")
      .then((res) => {
        res.data = res.data.map((msg) =>
          msg.name === Cookie.get("username") ? { ...msg, me: true } : msg
        );
        setmessages(res.data);
        // scroll to bottom
        let scrollableArea = document.querySelector(".area");
        var event = new CustomEvent("scrollBot");
        scrollableArea.dispatchEvent(event);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // pusher
  useEffect(() => {
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_SECRET, {
      cluster: "eu",
    });
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      if (newMessage.name !== Cookie.get("username"))
        setmessages([...messages, newMessage]);
      // scroll to bottom
      let scrollableArea = document.querySelector(".area");
      var event = new CustomEvent("scrollBot");
      scrollableArea.dispatchEvent(event);
    });
    // cleanup
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="chat__area">
      <ChatRoom name="hello" timestamp="2 am" messages={messages} />
      <div className="input">
        <SentimentSatisfiedOutlinedIcon />
        <div className="field__container">
          <div className="field">
            <input
              onKeyPress={(e) => sendMessage(e, messages, setmessages)}
              placeholder="search for something..."
              type="text"
            />
          </div>
        </div>
        <MicOutlinedIcon />
      </div>
    </div>
  );
};

const sendMessage = (e, messages, setmessages) => {
  if (e.key === "Enter") {
    let msg = document.querySelector(".input .field input").value;
    axios
      .post("/messages/new", { msg, name: Cookie.get("username") })
      .then((res) => {
        setmessages([...messages, { ...res.data, me: true }]);
        document.querySelector(".field input").value = "";
        // scroll to bottom
        let scrollableArea = document.querySelector(".area");
        var event = new CustomEvent("scrollBot");
        scrollableArea.dispatchEvent(event);
      })
      .catch((err) => console.error(err));
  }
};

export default ChatArea;
