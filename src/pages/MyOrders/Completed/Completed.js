import React from "react";
import { Component } from "react";
import MyOrdersNav from "../MyOrdersNav";
import SearchProduct from "../SearchProduct";
import OrderTable from "./OrdersTable";
import { Table } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOrderTransactions } from "../../../store/redux/order/actionOrder";
import { completeId } from "../../../config/constant";
import ClipLoader from "react-spinners/ClipLoader";

// import { Link } from "react-router-dom";

class Completed extends Component {
  componentDidMount() {
    this.props.fetchOrderTransactions();
  }

  render() {
    let data;

    if (!this.props.orderTransactions) {
      data = (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{display:'flex', height: "30vh", position: "relative", left: "170%" }}
        >
          <h6 style={{ textAlign: "center" }}>No data found...</h6>
          {/* <ClipLoader color="#fff" size="50" /> */}
        </div>
      );
    } else if (
      this.props.orderTransactions &&
      this.props.orderTransactions.length > 0
    ) {
      let filtered = this.props.orderTransactions.filter(
        (e) => (e.status ? e.status.orderStatus === "Completed" : "no order")
        //e.status.orderStatus === "Completed"
        // e.status.orderStatus === "Dispatched"
      );
      data = filtered.map((order) => (
        <OrderTable
          orderNumber={order._id}
          date={order.createdAt}
          time={order.createdAt}
          amount={order.cost}
          settlement="Paid"
          customerRating="3.0"
        />
      ));
    } else {
      data = (
        <h6
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft:'22rem'
          }}
        >
          No data found
        </h6>
      );
    }

    return (
      <div className="page-content transaction-page my-orders">
        <MyOrdersNav />

        <SearchProduct />
        <div className="mt-5 completed-order-table">
          <Table
            dark
            // hover
            style={{
              color: "#ffffff",
              background: "none",
            }}
          >
            <thead style={{ color: "#737376" }}>
              <tr>
                <th>Order Number</th>
                <th>Date & Time</th>
                <th>Amount</th>
                <th>Settlement</th>
                <th>Customer Ratings</th>
              </tr>
            </thead>
            <tbody>{data}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  const { orderTransactions } = state.Order;
  // console.log("order", orderTransactions);

  return { orderTransactions };
};

export default withRouter(
  connect(mapStatetoProps, { fetchOrderTransactions })(Completed)
);

// export default Completed;
