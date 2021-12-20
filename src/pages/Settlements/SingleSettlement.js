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
            pathname: `/settlement/${props.settlementId} `,
            state: props.data,
          }}
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          {props.settlementId}
        </Link>
      </td>
      <td>
        <Link
          to={{
            pathname: `/settlement/${props.settlementId} `,
            state: props.data,
          }}
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          {props.amount}
        </Link>
      </td>

      <td>
        <Link
          to={{
            pathname: `/settlement/${props.settlementId} `,
            state: props.data,
          }}
          style={{
            textDecoration: "none",
            color: "#ffffff",
          }}
        >
          {props.fees}
        </Link>
      </td>
      <td>
        {" "}
        <Link
          to={{
            pathname: `/settlement/${props.settlementId} `,
            state: props.data,
          }}
          style={{
            textDecoration: "none",
            color: "#ffffff",
          }}
        >
          {props.tax}
        </Link>
      </td>
      <td>
        {" "}
        <Link
          to={{
            pathname: `/settlement/${props.settlementId} `,
            state: props.data,
          }}
          style={{
            textDecoration: "none",
            color: "#ffffff",
          }}
        >
          {moment(props.date).format("DD:MM:YYYY")} At{" "}
          {moment(props.time).format("hh:mm")}
        </Link>
      </td>
      <td>
        <Link
          to={{
            pathname: `/settlement/${props.settlementId} `,
            state: props.data,
          }}
          style={{
            textDecoration: "none",
            color: "#ffffff",
          }}
        >
          <div
            className="badge badge-soft-success font-size-12"
            style={{ color: "#ffffff", background: statusColor() }}
          >
            {props.status}
          </div>
        </Link>
      </td>
    </tr>
  );
};

export default SingleSettlement;
