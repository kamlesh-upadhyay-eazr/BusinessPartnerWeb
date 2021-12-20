import React from "react";
import { Component } from "react";
// import MyOrders from "../MyOrders";
import MyOrdersNav from "../MyOrdersNav";
import SearchProduct from "../SearchProduct";
import SingleOrder from "../SingleOrder";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOrderTransactions } from "../../../store/redux/order/actionOrder";
import { ReadyToDispatchId } from "../../../config/constant";
import moment from "moment";
import ClipLoader from "react-spinners/ClipLoader";
class PreparingOrders extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchOrderTransactions();
  }

  render() {
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
      this.props.orderTransactions.length > 0
    ) {
      let filtered = this.props.orderTransactions.filter(
        (e) => (e.status ? e.status.orderStatus === "Preparing" : "no data")
        // e.status.orderStatus === "Preparing"
      );
      data = filtered.map((order) => (
        <SingleOrder
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
          btnText="Ready To Dispatch"
          additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
          toPage="/order-dispatch"
          statusid={ReadyToDispatchId}
          customer={order.customer}
        />
      ));
    } else {
      data = <h6 style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>No data found</h6>;
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

// const styles = StyleSheet.create({
//   bnColor: "",
// });

const mapStatetoProps = (state) => {
  const { orderTransactions, loading } = state.Order;
  // console.log("order", orderTransactions);

  return { orderTransactions, loading };
};

export default withRouter(
  connect(mapStatetoProps, { fetchOrderTransactions })(PreparingOrders)
);

// export default PreparingOrders;
