import React, { useState, useRef } from "react";
import submitBtn from "../../assets/images/chaticon.png";
import ValidateEaza from "../../Validations/ValidateEaza";
import WebCam from "react-webcam";

const Footer = ({ getMessages, getImages }) => {
  const [message, setMessage] = useState("");
  const [showAttachment, setShowAttachment] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);

  const [errors, setErrors] = useState("");
  const handleSubmit = () => {
    const { error, isValid } = ValidateEaza({
      message: message,
    });
    if (!isValid) {
      setErrors(error);
    } else {
      getMessages(message);
      setMessage("");
    }
  };

  const [image, setImage] = useState("");

  const inputFile = useRef(null);

  const handleClick = () => {
    inputFile.current.click();
  };

  const handleImageUpload = (e) => {
    const { images } = e.target;
    if (images && images.length) {
      const imagename = images[0].name;

      var parts = imagename.split(".");
      const fileType = parts[parts.length - 1];
      console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.

      setImage(images[0]);
    }
    getImages(image);
  };

  return (
    <>
      <div
        className="attach-files"
        style={{ display: showAttachment ? "flex" : "none" }}
      >
        <div
          className="attach-content"
          onClick={() => setOpenCamera(!openCamera)}
        >
          {openCamera && <WebCam />}
          <i class="fas  fa-camera"></i>
        </div>
        <div className="attach-content" onClick={handleClick}>
          <input
            type="file"
            ref={inputFile}
            onChange={(e) => handleImageUpload(e)}
            onAuxClick=".png, .jpeg, .gif"
            style={{ display: "none" }}
          />
          <i class="fas fa-image"></i>
        </div>
        <div className="attach-content">
          <i class="fas fa-microphone"></i>
        </div>
        <div className="attach-content">
          <i class="fas fa-file"></i>
        </div>
        <div className="attach-content">
          <i class="fas fa-map-marker-alt"></i>
        </div>
      </div>
      <div
        className="attach-btn"
        onClick={() => setShowAttachment(!showAttachment)}
      >
        {showAttachment ? (
          <i class="fas fa-times"></i>
        ) : (
          <i class="fas fa-plus"></i>
        )}
      </div>
      <div className="chat-input">
        <textarea
          type="text"
          placeholder={errors ? errors.message : "Type something "}
          rows="1"
          cols="12"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="chat-submit-btn" onClick={handleSubmit}>
        <img src={submitBtn} alt="" />
      </div>
    </>
  );
};

export default Footer;
