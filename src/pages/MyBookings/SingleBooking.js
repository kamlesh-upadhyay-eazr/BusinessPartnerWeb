import React from "react";
import BookingModal from "./BookingModal";
import Profile from "../../assets/images/profile.png";
import PinModal from "./PinModal";
const SingleBooking = (props) => {
  // const bgColor = () => {
  //   switch (props.btnText) {
  //     case "Accept":
  //       return "green";
  //       break;

  //     default:
  //       break;
  //   }
  //   console.log("switch");
  // };

  return (
    <div className="single-order mt-4">
      <div className="single-order-heading d-flex justify-content-around">
        <div>
          <h6>Order Number</h6>
          <p>{props.orderNumber}</p>
        </div>
        <div>
          <h6>Date & Time</h6>
          <p>{props.dateAndTime}</p>
        </div>
        <div>
          <h6>Name</h6>
          <p>{props.name}</p>
        </div>
        <div>
          <h6>Contact</h6>
          <p>{props.contact}</p>
        </div>
        <div>
          <h6>Trans Type</h6>
          <p className="badge">{props.tranType}</p>
        </div>
        <div>
          <h6>Amount</h6>
          <p>{props.amt}</p>
        </div>
        <div>
          <h6>Platform</h6>
          <p>{props.platform}</p>
        </div>
      </div>
      <hr style={{ borderColor: "#424242" }} />
      <div className="order-items d-flex justify-content-between">
        <div className="items">
          <p>Ordered Items</p>
        </div>
        <div>
          <p>{props.item1}</p>
        </div>
        <div>
          <p>{props.item2}</p>
        </div>
        <div>
          <p>{props.item3}</p>
        </div>
      </div>
      <div className="order-info d-flex justify-content-between">
        <div className="additional-info">
          <p>Additional information from customer</p>
          <span>{props.additionalInfo}</span>
        </div>
        <div
          className="order-item-otp"
          style={{
            display:
              window.location.href === "http://localhost:3000/order-dispatch"
                ? "block"
                : "none",
          }}
        >
          <p>Share OTP</p>
          <span>#12345</span>
        </div>
        <div className="order-items-btn d-flex">
          <div
            className="view-btn"
            style={{
              display:
                window.location.href === "http://localhost:3000/booking-details"
                  ? "none"
                  : "block",
            }}
          >
            {/* <button>View</button> */}
            <BookingModal
              name="Sameer Mittle"
              contact="+91 83883 99482"
              img={Profile}
              orderNumber="#988123"
              dateAndTime="01/01/2020 at 2:14 Pm"
              transType="Home Visit"
              amt="₹488"
              delAdd="5725, York Blvd, Los Angeles, Andheri (West) 400058"
              distance="3.6 Km"
              itemName1="Labs Test"
              itemName2="Labs Test 1"
              itemName3="Labs Test 2"
              qty1="X3"
              qty2="X2"
              qty3="X3"
              price1="₹160"
              price2="₹120"
              price3="₹140"
              additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
              deliveryDate="Jan 11,2020"
              deliveryTime="8:45:00 pm"
              subTotal="₹420"
              deliveryFee="₹68"
              totalAmount="₹488"
            />
          </div>

          {window.location.href ===
          "http://localhost:3000/accepted-bookings" ? (
            <PinModal />
          ) : (
            <div
              className="accept-btn"
              style={{
                display:
                  window.location.href ===
                  "http://localhost:3000/booking-details"
                    ? "none"
                    : "block",
              }}
            >
              <button style={{ background: props.btnBgColor }}>
                {props.btnText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleBooking;
