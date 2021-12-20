import React from "react";
import { Component } from "react";

import SingleBooking from "../SingleBooking";
import { Link } from "react-router-dom";
import DeliveryStatus from "../../MyOrders//Completed//DeliveryStatus";

class OrderDetails extends Component {
  render() {
    return (
      <>
        <nav
          aria-label="breadcrumb"
          style={{ marginTop: "5rem", marginBottom: "-5rem" }}
        >
          <ol className="breadcrumb" style={{ background: "none" }}>
            <li className="breadcrumb-item">
              <Link to="/completed-bookings" style={{ color: "#3A44A1" }}>
                <i
                  class="fas fa-arrow-left mr-3"
                  style={{ color: "#7062e0" }}
                ></i>{" "}
                Completed
              </Link>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{ color: "#ffffff" }}
            >
              Order ID : #988123
            </li>
          </ol>
        </nav>
        <div className="page-content transaction-page my-orders">
          <SingleBooking
            orderNumber="#988123"
            dateAndTime="01/01/2020 at 2:14 Pm"
            name="Devansh Mittle"
            contact="+91 83883 99482"
            tranType="Takeaway"
            amt="₹488"
            platform="Mobile"
            item1="Labs Test"
            item2="Labs Test 1"
            item3="Labs Test 2"
            additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
          />
          <DeliveryStatus
            name="Hemant Joshi"
            contact="99282 11442"
            parcelCollectedTime="4:14 pm"
            deliveryStatus="On the way"
            customerRating="3.2"
          />
        </div>
      </>
    );
  }
}

export default OrderDetails;
