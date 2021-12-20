import React from "react";

const BotBubble = ({ botMessage }) => {
  return (
    <>
      <div className="bot-bubble">
        <p>{botMessage}</p>
      </div>
      <div className="chat-time">
        <p>08:20 AM</p>
      </div>
    </>
  );
};

export default BotBubble;
