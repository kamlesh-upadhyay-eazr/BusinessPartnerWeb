import React from "react";
import { NavLink } from "react-router-dom";
const CategoryNav = () => {
  return (
    <>
      <div className="transaction-links">
        <div className="transaction-text-links">
          <ul>
            <li>
              <NavLink
                to="/product-category"
                activeStyle={{
                  color: "#7062e0",
                  borderBottom: "2px solid #ffcbc4",
                }}
              >
                All Product Category
              </NavLink>
            </li>
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
};

export default CategoryNav;
