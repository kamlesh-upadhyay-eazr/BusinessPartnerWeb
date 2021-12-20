import React from "react";
import { Component } from "react";
import SearchProduct from "../../MyOrders/SearchProduct";
import BookingNav from "../BookingNav";
import SingleBooking from "../SingleBooking";

class Processing extends Component {
  render() {
    return (
      <div className="processing-page page-content transaction-page my-orders">
        <BookingNav />
        <SearchProduct />
        <SingleBooking
          orderNumber="#988123"
          dateAndTime="01/01/2020 at 2:14 Pm"
          name="Devansh Mittle"
          contact="+91 83883 99482"
          tranType="Home Visit"
          amt="₹488"
          platform="Mobile"
          item1="Lab  X 1"
          item2="Labs te  X 3"
          item3="Labsg  X 3"
          btnText="Completed"
          additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
          btnBgColor="#3A44A1"
        />
        <SingleBooking
          orderNumber="#988123"
          dateAndTime="01/01/2020 at 2:14 Pm"
          name="Devansh Mittle"
          contact="+91 83883 99482"
          tranType="Lab Visit"
          amt="₹488"
          platform="Mobile"
          item1="Labst  X 1"
          item2="Labsbs X 3"
          item3="Labs5  X 3"
          additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
          btnText="Completed"
          btnBgColor="#3A44A1"
        />
        <SingleBooking
          orderNumber="#988123"
          dateAndTime="01/01/2020 at 2:14 Pm"
          name="Devansh Mittle"
          contact="+91 83883 99482"
          tranType="Lab Visit"
          amt="₹488"
          platform="Mobile"
          item1="Labst  X 1"
          item2="Labsbs X 3"
          item3="Labs5  X 3"
          additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
          btnText="Completed"
          btnBgColor="#3A44A1"
        />
      </div>
    );
  }
}

export default Processing;
