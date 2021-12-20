import React from "react";
import { NavLink } from "react-router-dom";

const FAQNav = () => {
  return (
    <div
      className="transaction-links"
      style={{ borderBottom: "1px solid #424242" }}
    >
      <div className="transaction-text-links">
        <ul>
          <li className="mr-2">
            <NavLink
              activeStyle={{
                color: " #7062e0",
                borderBottom: "2px solid #ffcbc4",
              }}
              to="/faq"
            >
              FAQ
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FAQNav;
