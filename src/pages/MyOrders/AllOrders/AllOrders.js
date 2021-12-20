import React from "react";
import { Component } from "react";
import MyOrdersNav from "../MyOrdersNav";
import SearchProduct from "../SearchProduct";
// import SingleOrder from "../SingleOrder";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { fetchOrderTransactions } from "../../../store/redux/order/actionOrder";
import SingleOrderforall from "./SingleOrderforall";
import moment from "moment";
import ClipLoader from "react-spinners/ClipLoader";
// import Order from "../../../store/redux/rootReducer";
// const { Order } = useSelector((state) => state.orderTransactions);
// console.log("Order", Order);
//

class AllOrders extends Component {
  // s;

  constructor(props) {
    super(props);
    this.state = {};
    this.props.fetchOrderTransactions();
  }

  componentDidMount() {}

  render() {
    let data;

    // if (!this.props.orderTransactions) {
    //

    //   console.log("my order", this.props.orderTransactions);
    //   data = (
    //     <div
    //       className="d-flex justify-content-center align-items-center"
    //       style={{ height: "60vh" }}
    //     >
    //       <h6 style={{ textAlign: "center" }}>No data found...</h6>
    //       {/* <ClipLoader color="#fff" size="50" /> */}
    //     </div>
    //   );
    // }
    //  else if (
    //   this.props.orderTransactions &&
    //   this.props.orderTransactions.length > 0 &&
    //   this.props.orderTransactions != null
    // )
    {
      console.log(this.props.orderTransactions);
      // ;
      // let filter = filter((e) => this.order.orderTransactions.status.orderStatus == "Pending" || "");
      data = this.props.orderTransactions?.order.map((order) => (
        <SingleOrderforall
          orderNumber={order._id}
          date={moment(order.createdAt).format("DD:MM:YYYY")}
          time={moment(order.createdAt).format("hh:mm")}
          name={order.user.name}
          contact={order.user.phone}
          tranType="Delivery"
          amt={order.cost}
          platform="Mobile"
          product={order.products}
          shiping={order.shipping}
          //btnText="Accept"
          textstatus={order.status}
          additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
          toPage="/order-preparing"
          customer={order.customer}
        />

        // <SingleOrder
        // orderNumber={order._id}
        // dateAndTime={order.createdAt}
        // name="Devansh Mittle"
        // contact="+91 83883 99482"
        // tranType="Delivery"
        // amt={order.cost}
        // platform="Mobile"
        // product={order.products}
        // shiping={order.shipping}
        // //btnText="Accept"
        // textstatus={order.status}
        // additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
        // toPage="/order-preparing"
        // customer={order.customer}
        // />
      ));
    }
    // else {
    //   data = (
    //     <h6
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //       }}
    //     >
    //       No data found
    //     </h6>
    //   );
    // }

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
  connect(mapStatetoProps, { fetchOrderTransactions })(AllOrders)
);
// export default AllOrders;
