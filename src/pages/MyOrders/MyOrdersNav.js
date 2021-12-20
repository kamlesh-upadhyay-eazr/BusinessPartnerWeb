import React from "react";
import { NavLink } from "react-router-dom";
import "./myOrders.css";
import { useWindowSize } from "@react-hook/window-size";
import "../Transaction/transaction.css";

const MyOrdersNav = () => {
  const [screen] = useWindowSize();

  return (
    <div className="transaction-links my-orders">
      <div className="transaction-text-links">
        <ul>
          <li className="my-orders-links">
            <NavLink
              activeStyle={{
                color: " #7062e0",
                borderBottom: "2px solid #ffcbc4",
              }}
              to="/my-orders"
            >
              New Orders
            </NavLink>
          </li>
          <li className="ml-5">
            <NavLink
              activeStyle={{
                color: " #7062e0",
                borderBottom: "2px solid #ffcbc4",
              }}
              to="/order-preparing"
            >
              Preparing
            </NavLink>
          </li>
          <li className="ml-5" style={{ width: screen < 1000 && "300px" }}>
            <NavLink
              activeStyle={{
                color: " #7062e0",
                borderBottom: "2px solid #ffcbc4",
              }}
              to="/order-dispatch"
            >
              Ready to Dispatch
            </NavLink>
          </li>
          <li className="ml-5">
            <NavLink
              activeStyle={{
                color: " #7062e0",
                borderBottom: "2px solid #ffcbc4",
              }}
              to="/order-completed"
            >
              Completed
            </NavLink>
          </li>
          <li className="ml-5">
            <NavLink
              activeStyle={{
                color: " #7062e0",
                borderBottom: "2px solid #ffcbc4",
              }}
              to="/all-orders"
            >
              All Orders
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyOrdersNav;
