import React from "react";
import "./ChatInterface.css";
import { Greet, ResponseScreen, QueryInput } from "../index";

const ChatInterface = () => {
  return (
    <div className="prompot__main">
      <div className="prompot__container">
        <Greet />
        <div className="prompot__message-cont">
          <ResponseScreen />
          <QueryInput />
        </div>
        <div className="prompot__footer">
          Made with <span className="prompot__footer-heart">♥</span> by Ashish &copy; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
