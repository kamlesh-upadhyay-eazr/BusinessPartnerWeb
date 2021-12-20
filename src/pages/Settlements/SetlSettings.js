import React from "react";
import { Component } from "react";
import { Container } from "reactstrap";
import SettlementNav from "./SettlementNav";
import QR from "../../assets/images/QR.png";
import HDFC from "../../assets/images/HDFC.png";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { fetchingBankDetails } from "../../store/redux/settlements/actionsettlements";
class SetlSettings extends Component {
  componentDidMount() {
    this.props.fetchingBankDetails();
  }
  render() {
    // console.log("bank", this.props.bankDetails);
    let num = this.props.bankDetails
      ? this.props.bankDetails.PrimaryNo
      : "null";

    let bankdts = this.props.bankDetails
      ? this.props.bankDetails.bankDetailsArr
      : "null";
    let data = bankdts[num];

    return (
      <div className="page-content transaction-page settlement-settings">
        <Container fluid className="mb-4">
          <div>
            <SettlementNav />
          </div>
          <div className="d-flex justify-content-start px-3 mt-4">
            <div className="text-white font-weight-bold">
              Your Settlelment Account
            </div>
          </div>
          <div className="banking-details">
            <div className="first-banking-details d-flex justify-content-between">
              <div
                className="banking-content d-flex justify-content-center mt-3 "
                style={{ background: "#000000" }}
              >
                <div className="qr d-flex ">
                  <div className="banking-qr mx-3">
                    <img src={QR} alt="qr-img" />
                  </div>
                  <div className="mt-3 para-div ">
                    <p>Payment received on your QR code are being settle to</p>
                  </div>
                </div>

                {/* {this.props.bankDetails != null &&
                  this.props.bankDetails.PrimaryNo ===
                    this.props.bankDetails.bankDetailsArr.map((item) =>
                      console.log("item", item.accountNumber)
                    )} */}

                <div className="bank d-flex">
                  <div className="hdfc-img mx-3">
                    <img src={HDFC} alt="bank-logo" />
                  </div>
                  <div>
                    {/* {console.log("nummm", typeof data)} */}
                    <p>
                      HDFC Bank {data != null ? data.accountNumber : "null"}
                    </p>
                    <span>IFSC : {data != null ? data.ifscCode : "null"}</span>
                  </div>
                </div>
              </div>
              {/* to="/change-account" */}
              <div className="mt-4">
                <Link
                  to={{
                    pathname: "/change-account",
                    state: this.props.bankDetails,
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <button className="change-btn">Change Account</button>
                </Link>
              </div>
            </div>

            {/* <div
              className="wallet-section d-flex  mt-3 "
              style={{ background: "#2C2C2E" }}
            >
              <div className="qr d-flex ">
                <div className="phone ">
                  <i class="fas fa-2x fa-mobile-alt mx-3"></i>
                </div>
                <div className="">
                  <p>
                    Payments received on your number 7977151313 are being
                    settled to
                  </p>
                </div>
              </div>
              <div className="bank d-flex">
                <div className="wallet ">
                  <i class="fas  fa-2x fa-wallet mx-3"></i>
                </div>
                <div>
                  <p>Eazrpay A/C 7977151313</p>
                  <p>To settle directly in bank account </p>
                  <Link style={{ color: "#DD5C64" }}>Click here</Link>
                </div>
              </div>
            </div> */}
          </div>
          <div className="settlement-footer text-center w-100 ">
            <p
              className="text-center w-50 font-size-14"
              style={{ margin: "0 auto" }}
            >
              The amount that gets settled to your bank account will show up
              here. See our{" "}
              <span style={{ color: "#7062e0" }}>Settlements Guide</span> to
              understand how it works.
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  const { bankDetails } = state.Settlement;
  return { bankDetails };
};

export default withRouter(
  connect(mapStatetoProps, { fetchingBankDetails })(SetlSettings)
);
