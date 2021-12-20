import React, { Component } from "react";
// import MyAccountNav from "./MyAccountNav";
import "./myAccount.css";
import SettingsNav from "../Settings/SettingsNav";
class MyAccount extends Component {
  constructor() {
    super();
    this.state = {
      file: null,
    };
  }
  // ImageThumb = ({ image }) => {
  //   return <img src={URL.createObjectURL(image)} alt={image.name} />;
  // };
  render() {
    return (
      <div className="my-account-page page-content transaction-page ">
        <SettingsNav />
        <div></div>
        <div className="user-info d-flex">
          <div className="user-profile-div">
            <div className="user-profile-section d-flex">
              <div className="user-img">
                <div style={{ color: "#ffffff" }}>Profile Picture</div>
                <div className="profile-pic">
                  {this.state.file ? (
                    <img src={this.state.file} alt="logo" />
                  ) : (
                    `logo`
                  )}
                </div>
                <div></div>
              </div>
              <div>
                <label htmlFor="files" className="btn btn-default choose-pic">
                  <i className="fas fa-folder"></i> Choose File
                </label>
                <input
                  id="files"
                  type="file"
                  className="btn btn-default"
                  style={{ visibility: "hidden" }}
                  onChange={(e) =>
                    this.setState({
                      file: URL.createObjectURL(e.target.files[0]),
                    })
                  }
                />
                <p style={{ color: "#ffffff" }}>Max file size : 1MB</p>
              </div>
            </div>
            <p className="my-3 font-size-12" style={{ color: "#ffffff" }}>
              Choose a square image of minimum dimensions 256 X 256 px.
            </p>
          </div>
          <div className="user-details">
            <div className="user-details-form">
              <div className="user-details-input-field">
                <label htmlFor="">Name</label>
                <br />
                <input type="text" placeholder="Type Here" />
              </div>
              <div className="user-details-input-field">
                <label htmlFor="">Email ID</label>
                <br />
                <input type="text" placeholder="Type Here" />
              </div>
              <div className="user-details-input-field">
                <label htmlFor="">Mobile Number</label>
                <br />
                <input type="text" placeholder="Type Here" />
              </div>
              <div className="user-details-input-field">
                <label htmlFor="">Address</label>
                <br />
                <textarea
                  name=""
                  id=""
                  rows="3"
                  placeholder="Type Here"
                ></textarea>
              </div>
              <div className="user-details-form-save-btn">
                <button onClick={console.log('Clicked')}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyAccount;
