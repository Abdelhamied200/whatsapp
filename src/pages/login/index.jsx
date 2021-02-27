import { Button, TextField } from "@material-ui/core";
import React from "react";
import Cookie from "../../helpers/cookie";

import "./login.scss";

const Login = (props) => {
  return (
    <div className="page">
      <div className="login">
        <div className="pic">
          <img src={require("../../assets/whatsapp.png").default} alt="" />
        </div>
        <div className="username">
          <TextField id="name" label="your name" variant="outlined" />
        </div>
        <div className="btn">
          <Button
            onClick={() => enterRoom(props)}
            variant="contained"
            color="primary"
            disableElevation
          >
            Enter the Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

const enterRoom = (props) => {
  let name = document.querySelector("input#name").value;
  Cookie.set({ username: name });
  props.history.push("/");
};

export default Login;
