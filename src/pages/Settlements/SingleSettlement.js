import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
const SingleSettlement = (props) => {
  // console.log("props", props);
  const statusColor = () => {
    if (props.status === "Completed") {
      return "#3A44A1";
    } else if (props.status === "Processed") {
      return "#3A955E";
    } else {
      return "#FF5611";
    }
  };
  return (
    <tr>
      <td>
        <Link
          // to="/settlement/:${}"
          to={{
            // pathname: `/settlement/${props.settlementId} `,
            state: props.data,
          }}
          style={{ textDecoration: "none", cursor: "auto", color: "#ffffff" }}
        >
        </Link>
          {props.settlementId}
      </td>
      <td>
        <Link
          to={{
            // pathname: `/settlement/${props.settlementId} `,
            state: props.data,
          }}
          style={{ textDecoration: "none", cursor: "auto", color: "#ffffff" }}
        >
        </Link>
          {props.amount}
      </td>

      <td>
        <Link
          to={{
            // pathname: `/settlement/${props.settlementId} `,
            state: props.data,
          }}
          style={{
            textDecoration: "none",
            color: "#ffffff",
            cursor: "auto",
          }}
        >
        </Link>
          {props.fees}
      </td>
      <td>
        {" "}
        <Link
          to={{
            // pathname: `/settlement/${props.settlementId} `,
            state: props.data,
          }}
          style={{
            textDecoration: "none",
            color: "#ffffff",
            cursor: "auto",
          }}
        >
        </Link>
          {props.tax}
      </td>
      <td>
        {" "}
        <Link
          to={{
            // pathname: `/settlement/${props.settlementId} `,
            state: props.data,
          }}
          style={{
            textDecoration: "none",
            color: "#ffffff",
            cursor: "auto",
          }}
          >
        </Link>
        
          {moment(props.date).format("DD:MM:YYYY")} At{" "}
          {moment(props.time).format("hh:mm")}
      </td>
      <td>
        <Link
          to={{
            // pathname: `/settlement/${props.settlementId} `,
            state: props.data,
          }}
          style={{
            textDecoration: "none",
            color: "#ffffff",
            cursor: "auto",
          }}
        >
          <div
            className="badge badge-soft-success font-size-12"
            style={{
              color: "#ffffff",
              cursor: "auto",
              background: statusColor(),
            }}
          >
          </div>
        </Link>
            {props.status}
      </td>
    </tr>
  );
};

export default SingleSettlement;
