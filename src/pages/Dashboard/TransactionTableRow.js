import React, { useState } from "react";
import moment from "moment";

const TransactionTableRow = ({
  paymentId,
  eazrPayOrderId,
  orderId,
  amount,
  emailId,
  contact,
  date,
  time,
  status,
}) => {
  // console.log(date);
  const showStatus = () => {
    // console.log(date);
    if (status === "Completed" || status === "completed") {
      return (
        <div
          className="badge badge-soft-success font-size-12"
          /*className="font-size-12 text-center"*/
          // style={{
          //   background: "#1CBB8C",
          //   color: "#fff",
          //   padding: "0.2rem 0.5rem",
          //   borderRadius: "2px",
          // }}
        >
          {status}
        </div>
      );
    } else if (status === "Refunded" || status === "refunded") {
      return (
        <div
          className="badge badge-soft-primary font-size-12"
          // className="font-size-12 text-center"
          // style={{
          //   background: "#5664D2",
          //   color: "#fff",
          //   padding: "0.2rem 0.5rem",
          //   borderRadius: "2px",
          // }}
        >
          {status}
        </div>
      );
    } else {
      return (
        <div
          className="badge badge-soft-danger font-size-12"
          // className="font-size-12 text-center"
          // style={{
          //   background: "#FF3D60",
          //   color: "#fff",
          //   padding: "0.2rem 0.5rem",
          //   borderRadius: "2px",
          // }}
        >
          {status}
        </div>
      );
    }
  };
  // const [hover, setHover] = useState(false);

  // const onHover = () => {
  //   setHover(true);
  // };

  // const onLeave = () => {
  //   setHover(false);
  // };
  return (
    <tr
      style={{ color: "#f0f8ff" }}
      // onMouseEnter={() => onHover()}
      // onMouseLeave={() => onLeave()}
    >
      <td>{paymentId}</td>
      <td data-toggle="tooltip" data-placement="bottom" title={eazrPayOrderId}>
        {eazrPayOrderId.substring(0, 14) + "..."}
      </td>
      <td data-toggle="tooltip" data-placement="bottom" title={"Order Id"}>
        {orderId}

        {/* {orderId != null && orderId != undefined
          ? (orderId).splice(0, 6) + "..."
          : ""} */}
      </td>
      <td>{amount}</td>
      <td>{emailId}</td>
      <td>{contact}</td>
      <td>
        {moment(date).format("DD:MM:YYYY")} At {moment(time).format("hh:mm")}
      </td>
      <td>{showStatus()}</td>
    </tr>
  );
};

export default TransactionTableRow;
