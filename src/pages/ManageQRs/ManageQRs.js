import React from "react";
import { Component } from "react";
import QRNav from "./QRNav";
import logo from "../../assets/images/logo-light.png";
import "./manageQR.css";
import qclogo from "../../assets/images/eazrqr3.png";
import UPIList from "./UPIList";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getProfile,
  downloadQr,
} from "../../store/redux/profile/actionProfile";

import QRCode from "qrcode.react";
// import { generateReports } from "../../store/redux/report/actionReport";
class ManageQRs extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      qrName: "",
    };
    this.editName = this.editName.bind(this);
  }
  componentDidMount() {
    this.props.getProfile();
    console.log("user", this.props.profile.upi);
  }
  editName() {
    this.setState({
      clicked: !this.state.clicked,
    });
    console.log(this.state.clicked);
  }

  // axios.get(`${ip}/business/transaction/failed`)
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   })

  render() {
    debugger;
    // let data = this.props.profile.upi;

    // if (data != null && data.length > 0) {
    //   data.map((item) => {
    //     console.log("item", item);
    //     return <UPIList upiId={item.upi} />;
    //   });
    // } else {
    //   console.log("wwaitndgwggqegq");
    // }
    return (
      <div className="page-content manage-qr-page transaction-page  ">
        <QRNav />

        <div className="qr-info mt-5 d-flex">
          <div className="qr-code" style={{ width: "40%" }}>
            <div className="qr-left-info">
              <div className="qr-left-info-logo">
                <img src={logo} alt="" />
                <h6>Scan & Pay</h6>
              </div>
              <div className="qr-code-div">
                {/* <img src={QRCode} alt="" /> */}
                <QRCode
                  //id="123456"
                  value={`${this.props.profile.mobile}@eazr`}
                  size={200}
                  imageSettings={qclogo}
                  level={"H"}
                  includeMargin={true}
                  imageSettings={{
                    src: qclogo,
                    x: null,
                    y: null,
                    height: 100,
                    width: 100,
                    //  excavate: true,
                  }}
                />
              </div>
              <div className="upi-id">{this.props.profile.mobile}@eazr</div>

              <div className="store-type">
                {" "}
                {this.state.clicked ? (
                  <h6>{this.state.qrName}</h6>
                ) : (
                  <h6> {this.props.profile.businessName}</h6>
                )}
              </div>
            </div>
            <div className="share-qr-btn">
              <button style={{ backgroundColor: "#7062e0" }}
              >
                Share QR
                </button>
            </div>
          </div>
          <div className="right-qr-info">
            <div className="my-2" style={{ color: "#ffffff" }}>
              QR Display Name
            </div>
            <div className="select-qr-name">
              <div className="w-50">
                <select name="" id="">
                  <option>{this.props.profile.businessName}</option>
                  {/* <option value="">Himanshu Verma</option> */}
                </select>
              </div>

              {/* 
              <div style={{ color: "#ffffff" }}>
                {this.props.profile.businessName}
              </div> */}

              {/* <div style={{ color: "#ffffff" }}>
                {this.props.profile.businessName}
              </div> */}
              <div className="download-qr-btn">
                <button
                  style={{ backgroundColor: "#7062e0", heighht:"2px", width:"10rem" }}
                  onClick={() => {
                    this.props.downloadQr(
                      this.props.deviceWidth,
                      this.props.deviceHeight
                    );
                    // console.log(this.props.profile._id);
                  }}
                >
                  Download QR Code
                </button>
                {/* <i className="fas fa-download"></i> */}
              </div>
            </div>
            <div className="edit-qr-details d-flex justify-content-between mt-5">
              <div className="qr-details">QR Code Details</div>
              <div className="edit-btn">
                {this.state.clicked ? (
                  <button onClick={this.editName}>Save</button>
                ) : (
                  <button onClick={this.editName}>Edit QR Details</button>
                )}
              </div>
            </div>
            {!this.state.clicked ? (
              <div className="display-name">
                <div>Display Name</div>

                <div style={{ color: "#ffffff" }}>
                  {this.props.profile.businessName}
                </div>
              </div>
            ) : (
              <input
                type="text"
                autoFocus
                onChange={(e) =>
                  this.setState({
                    qrName: e.target.value,
                  })
                }
              />
            )}
            <div className="edit-qr-details d-flex justify-content-between mt-5">
              <div className="qr-details">QR Code Details</div>
              <div className="edit-btn mb-3">
                <Link to="/add-upi">
                  <button>Add UPI</button>
                </Link>
              </div>
            </div>

            {this.props.profile.upi != null && this.props.profile.upi.length > 0
              ? this.props.profile.upi.map((item) => {
                  console.log("item", item);
                  return <UPIList upiId={item.upi} h={this.props} />;
                })
              : "NO DATA ...."}

            {/* <UPIList upiId="abcmedicalstore@okdhfcbank" />
            <UPIList upiId="abcmedicalstore@okdhfcbank" /> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  debugger;
  console.log("state", state.Profile);
  const { profile } = state.Profile;
  // console.log("order", orderTransactions);
  return { profile };
};

export default withRouter(
  connect(mapStatetoProps, { getProfile, downloadQr })(ManageQRs)
);

// export default ManageQRs;
