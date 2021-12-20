import React from "react";

import { Link } from "react-router-dom";
const BookingTable = ({
  bookingNumber,
  dateAndTime,
  amount,
  settlement,
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
    <tr>
      <th scope="row">
        <Link
          to="/booking-details"
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          {bookingNumber}
        </Link>{" "}
      </th>
      <td>
        <Link
          to="/booking-details"
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          {dateAndTime}
        </Link>
      </td>
      <td>
        <Link
          to="/booking-details"
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          {amount}
        </Link>
      </td>
      <td>
        <Link
          to="/booking-details"
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          {settlement}
        </Link>
      </td>

      <td className="table-customer-rating d-flex justify-content-between align-items-center">
        <span>
          <Link
            to="/booking-details"
            style={{
              textDecoration: "none",
              // color: customerRating <= 3 ? "#ffd341" : "#ffffff",
              color: ratingColor(),
              border: `1px solid ${ratingColor()}`,
            }}
          >
            {customerRating}
          </Link>
        </span>
        <p>
          <Link
            to="/booking-details"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Read Review
          </Link>
        </p>
        <Link
          to="/booking-details"
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          <p>
            <i class="fas fa-angle-right"></i>
          </p>
        </Link>
      </td>
    </tr>
  );
};

export default BookingTable;
