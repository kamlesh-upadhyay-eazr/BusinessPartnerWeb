import React from "react";

const UserBubble = ({ userMessage }) => {
  return (
    <div className="user-bubble">
      <div className="user-chat">
        <p>{userMessage}</p>
      </div>
      <div className="chat-time">
        <p>08:20 AM</p>
      </div>
    </div>
  );
};

export default UserBubble;
