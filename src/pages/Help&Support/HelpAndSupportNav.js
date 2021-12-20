import React from "react";
import { NavLink } from "react-router-dom";
const HelpAndSupportNav = () => {
  return (
    <di
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
              to="/need-help"
            >
              All Tickets
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink
              activeStyle={{
                color: " #7062e0",
                borderBottom: "2px solid #ffcbc4",
              }}
              to="/open-ticket"
            >
              Open Ticket
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink
              style={{ hover: { color: "black" } }}
              activeStyle={{
                color: " #7062e0",
                borderBottom: "2px solid #ffcbc4",
              }}
              to="/closed-ticket"
            >
              Closed Ticket
            </NavLink>
          </li>
        </ul>
      </div>
    </di>
  );
};

export default HelpAndSupportNav;
