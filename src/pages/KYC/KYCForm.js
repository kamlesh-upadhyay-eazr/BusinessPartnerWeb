import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./kyc.css";
class KYC extends Component {
  render() {
    return (
      <div className="page-content eazr-kyc-form">
        <div className="eazr-kyc-form-content">
          <h6>KYC Form</h6>
          <hr style={{ color: "#fff" }} />
          <div className="eazr-kyc-form-row">
            <div className="left-input-field">
              <label htmlFor="text">Company Type</label>
              <br />
              <input type="text" placeholder="Type Here" />
            </div>
            <div>
              <label htmlFor="text"> GST No.</label>
              <br />
              <input type="text" placeholder="Type Here" />
            </div>
            {/* <div>
              <label htmlFor="text">If you have Company GST No.</label>
              <br />
              <input type="text" placeholder="Type Here" />
            </div> */}
          </div>
          <div className="eazr-kyc-form-row">
            <div className="left-input-field">
              <label htmlFor="text">Company Name</label>
              <br />
              <input type="text" placeholder="Type Here" />
            </div>
            <div className="">
              <label htmlFor="text">CIN No.</label>
              <br />
              <input type="text" placeholder="Type Here" />
            </div>
            {/* <div>
              <label htmlFor="text"> GST No. Type Here</label>
              <br />
              <input type="text" placeholder="Type Here" />
            </div> */}
          </div>
          <div className="eazr-kyc-form-row">
            <div className="left-input-field">
              <label htmlFor="text">Business Type</label>
              <br />
              <input type="text" placeholder="Type Here" />
            </div>
            <div className="">
              <label htmlFor="text">Business Category</label>
              <br />
              <input type="text" placeholder="Type Here" />
            </div>
          </div>
          <div className="eazr-kyc-form-row">
            <div className="left-input-field">
              <label htmlFor="text">Company Pancard</label>
              <br />
              <input type="text" placeholder="Type Here" />
            </div>
            <div className="">
              <label htmlFor="text">Authorized Signitory PAN</label>
              <br />
              <input type="text" placeholder="Type Here" />
            </div>
          </div>
          <div className="eazr-kyc-form-row">
            <div className="left-input-field">
              <label htmlFor="text">PAN Owner Name</label>
              <br />
              <input type="text" placeholder="Type Here" />
            </div>
            <div className="">
              <label htmlFor="text">Mobile No.</label>
              <br />
              <input type="number" placeholder="+91" />
            </div>
          </div>
          <div className="eazr-kyc-form-row">
            <div className="left-input-field">
              <label htmlFor="text">Company Address</label>
              <br />
              <textarea name="" id="" cols="30" rows="3"></textarea>
            </div>
            <div className="">
              <label htmlFor="text">City</label>
              <br />
              <input type="text" placeholder="Type Here" />
            </div>
          </div>
          <div className="eazr-kyc-form-row">
            <div className="left-input-field">
              <label htmlFor="text">State</label>
              <br />
              <input type="text" placeholder="Type Here" />
            </div>
            <div className="">
              <label htmlFor="text">Pincode</label>
              <br />
              <input type="number" placeholder="+91" />
            </div>
          </div>
          <div className="eazr-kyc-form-row">
            <div className="left-input-field">
              <label htmlFor="text">Web/App URL</label>
              <br />
              <input type="text" placeholder="Type Here" />
            </div>
            <div>
              <label htmlFor="text">Bank Cancel Cheque ( PDF , JPEG )</label>{" "}
              <label for="files" className="btn btn-default upload-btn">
                Upload Cheque<i class="fas fa-upload mx-2"></i>
              </label>
              <input
                id="files"
                type="file"
                class="btn btn-default"
                style={{ visibility: "hidden" }}
              />
              <br />
            </div>
          </div>
          <div className="eazr-kyc-form-row">
            <Link to="/dashboard">
              <button className="submit-btn">Submit</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default KYC;
