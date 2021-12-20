import React from "react";

const TranTableHeading = () => {
  return (
    <>
      {/* <div style={{display:'flex'}}> */}
        <thead
          style={{
            // flex: 1,
            color: "#fff",
            fontWeight: "500",
            fontSize: "0.9rem",
            border: "2px solid #333747",
          }}
        >
          <tr>
            <th>Payment ID</th>
            <th> Eazrpay Order ID</th>
            <th>Order ID</th>
            <th>Amount</th>
            <th>Email ID</th>
            <th>Contact</th>
            <th>Created At</th>
            <th>Status</th>
          </tr>
        </thead>
      {/* </div> */}
    </>
  );
};

export default TranTableHeading;
