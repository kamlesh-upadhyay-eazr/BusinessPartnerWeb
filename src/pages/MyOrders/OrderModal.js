import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeOrderStatus } from "../../store/redux/order/actionOrder";
import { rejectId } from "../../config/constant";
import { useWindowSize } from "@react-hook/window-size";
const OrderModal = (props) => {
  console.log(props);

  const [modal, setModal] = useState(false);
  const [screen] = useWindowSize();

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div className="view-order-modal-main-div">
      <Button color="secondary" onClick={toggle}>
        View
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="view-modal"
        centered
        dialogClassName="view-modal"
        // size="lg"s
        style={{ maxWidth: screen < 1000 ? "100%" : "50%" }}
      >
        <ModalHeader toggle={toggle}>
          <div className="view-modal-header d-flex justify-content-between align-items-center">
            <div className="modal-header-img d-flex ">
              <img src={props.img} alt="" />
            </div>
            <div className="modal-order-details mt-3 ">
              <div className="user-details d-flex justify-content-between align-items-center">
                <div className="user-info">
                  <h6>{props.name}</h6>
                  <p>{props.contact}</p>
                </div>

                <div
                  className="reject-order"
                  style={{
                    display:
                      window.location.href === "http://localhost:3000/my-orders"
                        ? "block"
                        : "none",
                  }}
                >
                  <Link to="/my-orders">
                    <button
                      onClick={() =>
                        changeOrderStatus(props.orderNumber, rejectId)
                      }
                    >
                      Reject Order
                    </button>
                  </Link>
                </div>
              </div>
              <div className="order-details d-flex justify-content-between align-items-center flex-wrap my-3">
                <div style={{ paddingBottom: screen < 1000 && "1rem" }}>
                  <h6>Order Number</h6>
                  <p>{props.orderNumber}</p>
                </div>
                <div>
                  <h6>Order Date & Time</h6>
                  <p>
                    {props.date} At {props.time}
                  </p>
                </div>
                <div className="view-modal-transaction-type">
                  <h6>Trans Type</h6>
                  <p>{props.transType}</p>
                </div>
                <div>
                  <h6>Amount</h6>
                  <p>{props.amt}</p>
                </div>
              </div>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="view-modal-body">
            <div className="view-modal-left-body-side">
              <div className="view-modal-delivery-address-heading">
                <h6>Delivery</h6>
              </div>
              <div className=" view-modal-delivery-address d-flex justify-content-between">
                {/* <p>{`${props.ship.area}${props.ship.buildingName}${props.ship.country}${props.ship.flatNumber}${props.ship.landmark}${props.ship.streetName}${props.ship.pincode}${props.ship.state}`}</p> */}
                <span>{props.distance}</span>
              </div>
              <div>
                <div className="view-modal-ordered-items-header">
                  <h6>Ordered Items</h6>
                </div>

                {props.itemname
                  ? props.itemname.map((item) => {
                      return (
                        <div className="view-modal-ordered-items d-flex justify-content-between">
                          <p className="ordered-item-name">{item.name}</p>

                          <p className="ordered-item-qty">{item.quantity}</p>
                          <p className="ordered-item-cost">{item.cost}</p>
                        </div>
                      );
                    })
                  : "loading..."}
              </div>
              <hr />
              <div className="view-modal-additional-info">
                <h6>Additional information from customer</h6>
                <p>{props.additionalInfo}</p>
              </div>
            </div>
            <div
              className="view-modal-right-body-side"
              style={{ padding: screen < 1000 ? "0 " : "0 2rem" }}
            >
              <div className="view-modal-right-other-details-heading">
                <h6>Other Details</h6>
              </div>
              <div className="view-modal-right-other-details">
                <p>
                  Delivery Date : <span> {props.deliveryDate}</span>
                </p>
                <p>
                  Delivery Time : <span> {props.deliveryTime}</span>
                </p>
              </div>
              <hr />
              <div className="view-modal-right-transaction-details-heading">
                <h6>Transaction Details</h6>
              </div>
              <div className="view-modal-right-transaction-details">
                <p>
                  Sub Total : <span>{props.subTotal}</span>
                </p>
                <p>
                  Delivery Fee : <span>{props.deliveryFee}</span>
                </p>
                <p className="view-modal-right-transaction-details-total-amount">
                  Total Amount : <span>{props.totalAmount}</span>
                </p>
              </div>
              <div className="view-modal-right-accept-order-btn">
                {window.location.href === "http://localhost:3000/my-orders" ? (
                  <Link to="/order-preparing">
                    <button>Accept Order</button>
                  </Link>
                ) : (
                  <button style={{ background: "#5C606A", cursor: "default" }}>
                    Accepted
                  </button>
                )}
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStatetoProps = (state) => {
  const { orderTransactions, loading } = state.Order;
  // console.log("order", orderTransactions);

  return { orderTransactions, loading };
};

export default withRouter(
  connect(mapStatetoProps, { changeOrderStatus })(OrderModal)
);

// export default OrderModal;
