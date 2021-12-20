import React from "react";
import { Component } from "react";
import QRNav from "../QRNav";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addUpi, getProfile } from "../../../store/redux/profile/actionProfile";
import { upiValidation } from "../../../Validations/ValidateUpi";
import Alert from "../../../components/Alert/Alert";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

class AddUpi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      upinumber: "",
      errors: {},
    };
    this.validateUpi = this.validateUpi.bind(this);
  }

  createNotification = (type) => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success(
            "Success message",
            "Upi Added Successfully."
          );
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
      }
    };
  };

  validateUpi = () => {
    const { errors, isValid } = upiValidation({
      upiId: this.state.upinumber,
    });
    if (!isValid) {
      this.setState({
        errors,
      });
    } else {
      this.createNotification("success");
      this.setState({});
      this.props.addUpi(this.props.profile._id, this.state.upinumber);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      upinumber: "",
    });
  };

  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    // console.log("ppppp", this.props);
    return (
      <div className="page-content transaction-page add-upi-page">
        <QRNav />
        <div className="mx-5 mt-5" style={{ color: "#ffffff" }}>
          Enter UPI ID
        </div>
        {console.log("upi", this.state.upinumber)}
        <div className="upi-input">
          <input
            type="text"
            placeholder="UPI ID Type here"
            value={this.state.upinumber}
            onChange={(e) => this.setState({ upinumber: e.target.value })}
          />
          {this.state.errors && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {this.state.errors.upiId}
            </p>
          )}
        </div>
        <div className="mx-5 mt-5" style={{ color: "#ffffff" }}>
          Or Scan QR Code
        </div>
        {/* <div className="d-flex" style={{ background: "green" }}>
          <button className="qr-scan-btn d-flex flex-column text-center">
            <i class="fas fa-qrcode"></i>
            Scan QR
          </button>
          <button className="add-upi-btn">Add Upi</button>
        </div> */}
        <div className="add-upi-btns d-flex justify-content-between px-5 pt-3 w-50">
          <div>
            <button className="qr-scan-btn d-flex flex-column ">
              <i className="fas fa-qrcode"></i>
              Scan QR
            </button>
          </div>
          <div className="add-upi-btn">
            <br />
            <button
              onClick={() => {
                this.validateUpi();
              }}
            >
              Add UPI
            </button>
          </div>
        </div>
        <NotificationContainer />
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  // console.log("state", state.Profile);
  const { profile } = state.Profile;
  // console.log("order", orderTransactions);
  return { profile };
};

export default withRouter(
  connect(mapStatetoProps, { addUpi, getProfile })(AddUpi)
);

// export default AddUpi;
