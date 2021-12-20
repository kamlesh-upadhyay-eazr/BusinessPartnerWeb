import React from "react";
import { NavLink } from "react-router-dom";
const BookingNav = () => {
  return (
    <>
      <div className="transaction-links">
        <div className="transaction-text-links">
          <ul>
            <li className="mr-2">
              <NavLink
                activeStyle={{ color: " #7062e0", background: "#2c2c2c" }}
                to="/my-bookings"
              >
                New Bookings
              </NavLink>
            </li>
            <li className="ml-5">
              <NavLink
                activeStyle={{ color: " #7062e0", background: "#2c2c2c" }}
                to="/accepted-bookings"
              >
                Accepted List
              </NavLink>
            </li>
            <li className="ml-5">
              <NavLink
                activeStyle={{ color: " #7062e0", background: "#2c2c2c" }}
                to="/processing-bookings"
              >
                Processing
              </NavLink>
            </li>
            <li className="ml-5">
              <NavLink
                activeStyle={{ color: " #7062e0", background: "#2c2c2c" }}
                to="/completed-bookings"
              >
                Completed
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BookingNav;
