import React, { useState, useEffect } from "react";
import "./Eaza.css";
import Header from "./Header";
import BotBubble from "./BotBubble";
import UserBubble from "./UserBubble";
import Footer from "./Footer";
import { animateScroll } from "react-scroll";
import chatIcon from "../../assets/images/chat.svg";

const Eaza = () => {
  const [openEaza, setOpenEaza] = useState(false);
  const [userMessages, setUserMessages] = useState([]);
  const [imageSent, setImageSent] = useState("");

  const getMessages = (message) => {
    const messages = userMessages;
    setUserMessages([...messages, { message }]);
  };

  const getImages = (image) => {
    setImageSent(image);
  };

  const closeEaza = (closeEaza) => {
    setOpenEaza(closeEaza);
  };

  useEffect(() => {
    scrollToBottom();
  }, [userMessages]);

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: "messages",
      duration: 200,
    });
  };

  return (
    <>
      <div className="eaza-icon " onClick={() => setOpenEaza(!openEaza)}>
        <img src={chatIcon} alt="" />
      </div>
      <div
        className={
          openEaza ? "eaza-container fade_in_show" : "eaza-container fade_out"
        }
        style={{ display: openEaza ? "block" : "none" }}
      >
        <Header closeEaza={closeEaza} />

        <div className="chat-section" id="messages">
          <BotBubble botMessage="Hey there! What's up?" />
          <UserBubble userMessage="Nothing. Just chilling and watching Youtube.What about you?" />
          <BotBubble botMessage="Same here!Been watching Youtube fro the past 5 hours despite of having so much to do!" />
          {console.log(userMessages)}
          {userMessages.length > 0
            ? userMessages.map((message) => {
                return <UserBubble userMessage={message.message} />;
              })
            : null}
        </div>
        <div className="chat-footer">
          <Footer getMessages={getMessages} getImages={getImages} />
        </div>
      </div>
    </>
  );
};

export default Eaza;
