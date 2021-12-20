import React from "react";
import { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "../Transaction/transaction.css";
class SettlementNav extends Component {
  render() {
    return (
      <>
        <div className="transaction-links">
          <div className="transaction-text-links">
            <ul>
              <Link to="/settlements">
                <li>
                  <NavLink
                    to="/settlements"
                    activeStyle={{
                      color: " #7062e0",
                      borderBottom: "2px solid #ffcbc4",
                    }}
                  >
                    All Settlements
                  </NavLink>
                </li>
              </Link>
              {/* <Link to="/failed-settlements">
                <li>
                  <NavLink
                    activeStyle={{ color: " #7062e0", background: "#2c2c2c" }}
                    to="/failed-settlements"
                  >
                    Failed Settlements
                  </NavLink>
                </li>
              </Link> */}
              <Link to="complete-settlements">
                <li>
                  <NavLink
                    activeStyle={{
                      color: " #7062e0",
                      borderBottom: "2px solid #ffcbc4",
                    }}
                    to="/complete-settlements"
                  >
                    Completed Settlements
                  </NavLink>
                </li>
              </Link>
              <Link to="/settlement/settings">
                <li>
                  <NavLink
                    activeStyle={{
                      color: " #7062e0",
                      borderBottom: "2px solid #ffcbc4",
                    }}
                    to="/settlement-settings"
                  >
                    Settlements Settings
                  </NavLink>
                </li>
              </Link>
            </ul>
          </div>
          {/* <div className="transaction-icon-links d-flex">
            <div className="pt-2 px-2 first-div">
              <i class="fas fa-grip-lines font-size-20"></i>
            </div>
            <div className="pt-2 px-2">
              <i class="fas fa-bars font-size-20"></i>
            </div>
          </div> */}
        </div>
      </>
    );
  }
}

export default SettlementNav;
