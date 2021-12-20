import React from "react";
import { NavLink } from "react-router-dom";
const MyAccountNav = () => {
  return (
    <div
      className="transaction-links"
      style={{ borderBottom: "1px solid #424242" }}
    >
      <div className="transaction-text-links">
        <ul>
          <li className="mr-2">
            <NavLink activeStyle={{ color: " #7062e0" }} to="/my-account">
              Basic Information
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyAccountNav;
