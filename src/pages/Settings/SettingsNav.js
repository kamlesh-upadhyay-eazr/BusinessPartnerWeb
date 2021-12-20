import React from "react";
import { NavLink } from "react-router-dom";
const SettingsNav = () => {
  // axios
  // .get(`${ip}/business/updaateProfilePicture);
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((err) => {
  //   console.error(err);
  // })
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
              to="/settings"
            >
              My Account
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink
              activeStyle={{
                color: " #7062e0",
                borderBottom: "2px solid #ffcbc4",
              }}
              to="/configuration"
            >
              Configuration
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink
              activeStyle={{
                color: " #7062e0",
                borderBottom: "2px solid #ffcbc4",
              }}
              to="/api-keys"
            >
              API Keys
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink
              activeStyle={{
                color: " #7062e0",
                borderBottom: "2px solid #ffcbc4",
              }}
              to="/store-hours"
            >
              Store Hours
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SettingsNav;
