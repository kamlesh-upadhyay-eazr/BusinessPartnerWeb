import React from "react";
import moment from "moment";

import { Link } from "react-router-dom";
const OrderTable = ({
  orderNumber,
  date,
  time,
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
      <th scope="row" data-toggle="tooltip" title={orderNumber}>
        <Link
          // to="/order-details"
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          {orderNumber.substring(0, 8) + "..."}
        </Link>{" "}
      </th>
      <td>
        <Link
          // to="/order-details"
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          {moment(date).format("DD:MM:YYYY")} At {moment(time).format("hh:mm")}
        </Link>
      </td>
      <td>
        <Link
          // to="/order-details"
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          {amount}
        </Link>
      </td>
      <td>
        <Link
          // to="/order-details"
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          {settlement}
        </Link>
      </td>

      <td className="table-customer-rating d-flex justify-content-between align-items-center">
        <span>
          <Link
            // to="/order-details"
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
            // to="/order-details"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Read Review
          </Link>
        </p>
        <Link
          // to="/order-details"
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

export default OrderTable;
