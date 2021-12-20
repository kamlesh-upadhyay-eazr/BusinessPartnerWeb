import React from "react";

const NoOrders = () => {
  return (
    <div className="available-orders">
      <div className="display-orders">
        <i className="fab fa-dropbox"></i>
        <p>We don’t have any orders for you</p>
        <span>
          We will inform you once we receive new order for your Customer
        </span>
      </div>
    </div>
  );
};

export default NoOrders;
