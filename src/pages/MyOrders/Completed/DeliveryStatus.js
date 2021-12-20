import React from "react";

const DeliveryStatus = ({
  name,
  contact,
  parcelCollectedTime,
  deliveryStatus,
  customerRating,
}) => {
  const ratingColor = () => {
    if (customerRating <= 3) {
      return "#ffd341";
    } else if (customerRating <= 4) {
      return "#03AA3D";
    } else {
      return "#FF5611";
    }
  };
  return (
    <div className="delivery-status">
      <div className="delivery-status-header">
        <div>
          <h6>Delivery Boy Details</h6>
        </div>
        <div>
          <h6>Delivery Status</h6>
        </div>
      </div>
      <div className="delivery-status-details">
        <div className="delivery-boy-details bordered-div">
          <p>Name</p>
          <h6>{name}</h6>
        </div>
        <div
          className="d-flex justify-content-between bordered-div"
          style={{ width: "30%" }}
        >
          <div>
            <p>Contact Number</p>
            <h6>{contact}</h6>
          </div>
          <div>
            <p>Collected Parcel</p>
            <h6>{parcelCollectedTime}</h6>
          </div>
        </div>
        <div className="bordered-div">
          <p>Delivered to customer</p>
          <h6>{deliveryStatus}</h6>
        </div>
        <div className="customer-rating">
          <p>Customer Rating</p>
          <h6
            style={{
              color: ratingColor(),
              border: `1px solid ${ratingColor()}`,
              width: "50%",
              padding: "0.2rem 0.5rem",
              borderRadius: "5px",
            }}
          >
            {customerRating}
          </h6>
        </div>
      </div>
      <div className="delivery-status-header w-100">
        <div className="mt-4 ">
          <h6>Customer Review</h6>
          <p className="w-100 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem
            illum delectus ipsa porro dolore veritatis ea explicabo, earum
            voluptatibus molestias alias, quos ex? Distinctio accusantium
            placeat dolores nesciunt est?
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryStatus;
