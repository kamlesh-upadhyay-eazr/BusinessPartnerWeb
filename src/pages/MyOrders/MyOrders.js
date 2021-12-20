import React from "react";
import { Component } from "react";
import MyOrdersNav from "./MyOrdersNav";
import SearchProduct from "./SearchProduct";
import NoOrders from "./NoOrders";
import SingleOrder from "./SingleOrder";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchOrderTransactions,
  changeOrderStatus,
} from "../../store/redux/order/actionOrder";
import { preparingstatusId } from "../../config/constant";
import ClipLoader from "react-spinners/ClipLoader";

import moment from "moment";
import "./myOrders.css";

class MyOrders extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchOrderTransactions();
    // console.log(this.props.orderTransactions);
  }

  render() {
    //  console.log("myorders", this.props);
    let data;

    if (!this.props.orderTransactions) {
      data = (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "60vh" }}
        >
          <h6 style={{ textAlign: "center" }}>No data found...</h6>
          {/* <ClipLoader color="#fff" size="50" /> */}
        </div>
      );
    } else if (
      this.props.orderTransactions &&
      this.props.orderTransactions.length > 0 &&
      this.props.orderTransactions != null
    ) {
      let filtered = this.props.orderTransactions.filter((e) =>
        e.status ? e.status.orderStatus === "Pending" : "no data"
      );
      // e.status.orderStatus === "Pending";
      data = filtered.map((order) => {
        return (
          <SingleOrder
            customer={order.customer}
            orderNumber={order._id}
            date={moment(order.createdAt).format("DD:MM:YYYY")}
            time={moment(order.createdAt).format("hh:mm")}
            name="Devansh Mittle"
            contact="+91 83883 99482"
            tranType="Delivery"
            amt={order.cost}
            platform="Mobile"
            product={order.products}
            shiping={order.shipping}
            btnText="Accept"
            status={order.status}
            additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            toPage="/order-preparing"
            statusid={preparingstatusId}
          />
        );
      });
    } else {
      data = <NoOrders />;
    }
    return (
      <div className="page-content transaction-page my-orders">
        <MyOrdersNav />

        <SearchProduct />

        {data}
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
  connect(mapStatetoProps, { fetchOrderTransactions, changeOrderStatus })(
    MyOrders
  )
);
