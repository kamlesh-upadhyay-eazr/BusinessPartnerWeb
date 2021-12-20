import React from "react";
import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
// import { Col } from "reactstrap";
import "./transaction.css";
class ContentNav extends Component {
  render() {
    return (
      <>
        <div className="transaction-links">
          <ul>
            <Link to="/transaction">
              <li>
                <NavLink
                  activeStyle={{
                    color: " #7062e0",
                    borderBottom: "2px solid #ffcbc4",
                  }}
                  to="/transaction"
                >
                  All Transactions
                </NavLink>
              </li>
            </Link>

            <Link to="/failed-transaction">
              <li>
                <NavLink
                  activeStyle={{
                    color: " #7062e0",
                    borderBottom: "2px solid #ffcbc4",
                  }}
                  to="/failed-transaction"
                >
                  Failed Transactions
                </NavLink>
              </li>
            </Link>
            <Link to="/refunded-transaction">
              <li>
                <NavLink
                  activeStyle={{
                    color: " #7062e0",

                    borderBottom: "2px solid #ffcbc4",
                  }}
                  to="/refunded-transaction"
                >
                  Refunded Transactions
                </NavLink>
              </li>
            </Link>
            <Link to="/completed-transaction">
              <li>
                <NavLink
                  activeStyle={{
                    color: " #7062e0",
                    borderBottom: "2px solid #ffcbc4",
                    paddingTop: "10px",
                  }}
                  to="/completed-transaction"
                >
                  Completed Transactions
                </NavLink>
              </li>
            </Link>
            {/* <li style={{ marginLeft: "10rem", color: "#DF8649" }}>
              + Add Filter
            </li> */}
          </ul>
        </div>
      </>
    );
  }
}

export default ContentNav;
