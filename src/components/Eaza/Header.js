import React from "react";
import "./Eaza.css";
import avatar from "../../assets/images/profile.png";
const Header = ({ closeEaza }) => {
  const handleEaza = () => {
    closeEaza(false);
  };
  return (
    <div className="eaza-header">
      <div className="back-btn" onClick={handleEaza}>
        <i class="fas fa-times"></i>
      </div>
      <div className="eaza-status">
        <h5>Eaza</h5>
        <p>Online</p>
      </div>
      <div className="eaza-avatar">
        <img src={avatar} alt="" />
      </div>
    </div>
  );
};

export default Header;
