import React, { useState, useEffect } from "react";
import OrderModal from "../OrderModal";
import Profile from "../../../assets/images/profile.png";
// ../../assets/images/profile.png
import Timer from "react-compound-timer";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeOrderStatus } from "../../../store/redux/order/actionOrder";

const SingleOrderforall = (props) => {
  // console.log("statusid");
  const [timer, setTimer] = useState(180);

  // const chnageorderbt = () => console.log("hello");
  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    }
  });

  // props.changeOrderStatus(props.orderNumber, props.statusid);

  // export const pendingstatusId = "6023a9b5d63a87189c45aaf0";
  // export const preparingstatusId = "6023a9c2d63a87189c45aaf1";
  // export const ReadyToDispatchId = "6023a9ead63a87189c45aaf2";
  // export const dispatchedId = "6023a9f9d63a87189c45aaf3";
  // export const completeId = "6023aa00d63a87189c45aaf4";
  // export const rejectId = "60266f5cf2fe842160f16fd8";

  const changestatusid = () => {
    if (props.statusid === "6023a9b5d63a87189c45aaf0") {
      console.log("pending..");
      props.changeOrderStatus(props.orderNumber, props.statusid);
    } else if (props.statusid === "6023a9c2d63a87189c45aaf1") {
      props.changeOrderStatus(props.orderNumber, props.statusid);
    } else if (props.statusid === "6023a9ead63a87189c45aaf2") {
    } else if (props.statusid === "6023a9f9d63a87189c45aaf3") {
      props.changeOrderStatus(props.orderNumber, props.statusid);
    } else if (props.statusid === "6023aa00d63a87189c45aaf4") {
    } else {
    }
  };

  // this.props.changeOrderStatus();

  //for cheking ssa

  const showTimer = () => {
    if (
      window.location.href === "http://localhost:3000/my-orders" ||
      window.location.href === "http://localhost:3000/order-preparing"
    ) {
      return "block";
    } else {
      return "none";
    }
  };

  const statusBackground = () => {
    if (props.textstatus.orderStatus === "Completed") {
      return "#3A44A1";
    } else if (props.textstatus.orderStatus === "Preparing") {
      return "#3A955E";
    } else if (props.textstatus.orderStatus === "Rejected") {
      return "#DD5C64";
    } else {
      return "#0046c9";
    }
  };

  // props.status._id, props.status.orderStatus
  return (
    <div className="single-order mt-4">
      <div className="single-order-heading d-flex justify-content-around">
        <div>
          <h6>Order Number</h6>
          <p>{props.orderNumber}</p>
        </div>
        <div>
          <h6>Date & Time</h6>
          <p>
            {props.date} At {props.time}
          </p>
        </div>
        <div>
          <h6>Name</h6>
          <p>{props.name}</p>
        </div>
        <div>
          <h6>Contact</h6>
          <p>{props.contact}</p>
        </div>
        <div>
          <h6>Trans Type</h6>
          <p className="badge">{props.tranType}</p>
        </div>
        <div>
          <h6>Amount</h6>
          <p>{props.amt}</p>
        </div>
        <div>
          <h6>Platform</h6>
          <p>{props.platform}</p>
        </div>
      </div>
      <hr style={{ borderColor: "#424242" }} />
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ paddingRight: "2rem" }}
      >
        <div className="order-items d-flex justify-content-between">
          <div className="items">
            <p>Ordered Items</p>
          </div>
          {/* <div>
            <p>{console.log("prod in", props.product.name)}</p>
          </div> */}

          {props.product
            ? props.product.map((item) => {
                return (
                  <div>
                    <p>{item.name + "X" + item.quantity} </p>
                  </div>
                );
              })
            : "Loading.."}

          {/* <div>
            <p>{props.item3}</p>
          </div> */}
        </div>
        <div
          className="order-timer"
          style={{
            display: showTimer(),
          }}
        >
          <h5>
            {" "}
            <Timer
              initialTime={179999}
              direction="backward"
              className="my-5 text-white"
            >
              {() => (
                <React.Fragment>
                  <Timer.Minutes /> : <Timer.Seconds />
                </React.Fragment>
              )}
            </Timer>
          </h5>
        </div>
      </div>
      <div className="order-info d-flex justify-content-between">
        <div className="additional-info">
          <p>Additional information from customer</p>
          <span>{props.additionalInfo}</span>
        </div>
        <div
          className="order-item-otp"
          style={{
            display:
              window.location.href === "http://localhost:3000/order-dispatch"
                ? "block"
                : "none",
          }}
        >
          <p>Share OTP</p>
          <span>#12345</span>
        </div>
        <div className="order-items-btn d-flex">
          <div
            className="view-btn"
            style={{
              display:
                window.location.href === "http://localhost:3000/order-details"
                  ? "none"
                  : "block",
            }}
          >
            {/* <button>View</button> */}
            <OrderModal
              itemname={props.product}
              ship={props.shiping}
              name={"name"}
              contact={"email"}
              img={Profile}
              orderNumber={props.orderNumber}
              dateAndTime={props.dateAndTime}
              transType="Delivery"
              amt={props.amt}
              delAdd="5725, York Blvd, Los Angeles, Andheri (West) 400058"
              distance="3.6 Km"
              // itemName1={props.item1}
              // itemName2={props.item2}
              additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
              deliveryDate="Jan 11,2020"
              deliveryTime="8:45:00 pm"
              subTotal="₹420"
              deliveryFee="₹68"
              totalAmount={props.amt}
            />
          </div>

          <div
            className="accept-btn"
            style={{
              display:
                window.location.href === "http://localhost:3000/order-details"
                  ? "none"
                  : "block",
            }}
          >
            {/* <Link to={props.toPage}> */}
            <button
              // onClick={() => changestatusid}
              // style={{ background: props.btnBgColor }}
              style={{ background: statusBackground() }}
            >
              {console.log("status", props.textstatus.orderStatus)}
              {props.textstatus ? props.textstatus.orderStatus : "Accept"}
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  const { orderTransactions, loading } = state.Transaction;
  // console.log("order", orderTransactions);

  return { orderTransactions, loading };
};

export default withRouter(
  connect(mapStatetoProps, { changeOrderStatus })(SingleOrderforall)
);

// export default SingleOrderforall;
