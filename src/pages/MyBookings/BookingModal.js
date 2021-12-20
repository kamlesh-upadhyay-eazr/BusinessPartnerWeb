import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
const BookingModal = (props) => {
  const [modal, setModal] = useState(false);

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
        // size="lg"
        style={{ maxWidth: "50%" }}
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
                {window.location.href ===
                  "http://localhost:3000/my-bookings" && (
                  <div className="reject-order">
                    <button>Reject Booking</button>
                  </div>
                )}
              </div>
              <div className="order-details d-flex justify-content-between align-items-center my-3">
                <div>
                  <h6>Order Number</h6>
                  <p>{props.orderNumber}</p>
                </div>
                <div>
                  <h6>Order Date & Time</h6>
                  <p>{props.dateAndTime}</p>
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
                <p>{props.delAdd}</p>
                <span>{props.distance}</span>
              </div>
              <div>
                <div className="view-modal-ordered-items-header">
                  <h6>Ordered Items</h6>
                </div>
                <div className="view-modal-ordered-items d-flex justify-content-between">
                  <p className="ordered-item-name">{props.itemName1}</p>
                  <p className="ordered-item-qty">{props.qty1}</p>
                  <p>{props.price1}</p>
                </div>
                <div className="view-modal-ordered-items d-flex justify-content-between">
                  <p className="ordered-item-name">{props.itemName2}</p>

                  <p className="ordered-item-qty">{props.qty2}</p>
                  <p>{props.price2}</p>
                </div>
                <div className="view-modal-ordered-items d-flex justify-content-between">
                  <p className="ordered-item-name">{props.itemName3}</p>
                  <p className="ordered-item-qty">{props.qty3}</p>
                  <p>{props.price3}</p>
                </div>
              </div>
              <hr />
              <div className="view-modal-additional-info">
                <h6>Additional information from customer</h6>
                <p>{props.additionalInfo}</p>
              </div>
            </div>
            <div className="view-modal-right-body-side px-3">
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
                {window.location.href ===
                "http://localhost:3000/my-bookings" ? (
                  <Link to="/accepted-bookings">
                    <button>Accept Booking</button>
                  </Link>
                ) : (
                  <button style={{ background: "#2c2c2c" }}>Accepted</button>
                )}
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default BookingModal;
