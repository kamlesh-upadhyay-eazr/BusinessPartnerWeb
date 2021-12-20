import React from "react";
import { Component } from "react";
import Container from "reactstrap/lib/Container";
import SettlementNav from "../Settlements/SettlementNav";
// import { Link } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { addBankDetail } from "../../store/redux/settlements/actionsettlements";

//Validations
import { NewAccountValidation } from "../../Validations/ValidateNewAccount";

class AddNewAccount extends Component {
  // debugger;
  constructor(props) {
    super(props);

    this.state = {
      bankaccountnumer: "",
      bankname: "",
      branchname: "",
      bankifsc: "",
      confirmAccount: "",
      errors: {},
    };
    this.validateNewAccount = this.validateNewAccount.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  resetForm = () => {
    this.setState({
      bankname: "",
      bankaccountnumer: "",
      bankifsc: "",
      branchname: "",
      confirmAccount: "",
    });
  };

  validateNewAccount = () => {
    const { errors, isValid } = NewAccountValidation({
      accNumber: this.state.bankaccountnumer,
      bankName: this.state.bankname,
      ifscCode: this.state.bankifsc,
      branch: this.state.branchname,
      confirmAccNumber: this.state.confirmAccount,

      // accNumber: this.state.bankaccountnumer,
      // bankName: this.state.branchname,
      // ifscCode: this.state.bankname,
      // branch: this.state.bankifsc,
      // confirmAccNumber: this.state.confirmAccount,
    });
    if (!isValid) {
      this.setState({
        errors,
      });
    } else {
      this.setState({
        errors: {},
      });
      this.resetForm();
      this.props.addBankDetail(
        this.state.bankaccountnumer,
        this.state.bankname,
        this.state.branchname,
        this.state.bankifsc
      );
    }
  };
  // debugger;

  render() {
    // debugger;
    console.log("name", this.state);
    return (
      <div className="page-content transaction-page add-account">
        <Container fluid>
          <SettlementNav />

          <div className="add-account-heading mt-5">
            <p>Provide Bank Details</p>
            <span>Your payments will be sent to this account</span>
          </div>
          <div className="d-flex add-account-holder">
            <div className="account-form">
              <div className="first-row d-flex">
                <div>
                  <label htmlFor="">Bank Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="XYZ Bank"
                    value={this.state.bankname}
                    onChange={(e) =>
                      this.setState({ bankname: e.target.value })
                    }
                  />
                  {this.state.errors && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {this.state.errors.bankName}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="">Bank IFSC Code</label>
                  <br />
                  <input
                    value={this.state.bankifsc}
                    type="text"
                    placeholder="ORBC0100287"
                    onChange={(e) =>
                      this.setState({ bankifsc: e.target.value })
                    }
                  />
                  {this.state.errors && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {this.state.errors.ifscCode}
                    </p>
                  )}
                </div>
              </div>
              <div className="first-row second-row d-flex">
                <div className="div2">
                  <label htmlFor="">Bank Account Number</label>
                  <br />
                  <input
                    value={this.state.bankaccountnumer}
                    type="text"
                    placeholder="02872011030111"
                    onChange={(e) =>
                      this.setState({ bankaccountnumer: e.target.value })
                    }
                  />
                  {this.state.errors && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {this.state.errors.accNumber}
                    </p>
                  )}
                </div>

                <div className="div2">
                  <label htmlFor="">Re-Enter Bank Account Number</label>
                  <br />
                  <input
                    value={this.state.confirmAccount}
                    type="text"
                    placeholder="02872011030111"
                    onChange={(e) =>
                      this.setState({
                        confirmAccount: e.target.value,
                      })
                    }
                  />
                  {this.state.errors && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {this.state.errors.confirmAccNumber}
                    </p>
                  )}
                  {this.state.errors && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {this.state.errors.matchAccountNo}
                    </p>
                  )}
                </div>
              </div>
              <div className="bank-branch-div first-row my-3">
                <label htmlFor="">Bank Branch</label>
                <br />
                <input
                  value={this.state.branchname}
                  className="bank-branch"
                  type="text"
                  placeholder="Name of your Branch"
                  onChange={(e) =>
                    this.setState({ branchname: e.target.value })
                  }
                />
                {this.state.errors && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {this.state.errors.branch}
                  </p>
                )}
              </div>
              <div className="proceed-btn">
                {/* <Link
                  to={{
                    pathname: "/change-account",
                    state: this.props.bankDetails,
                  }}
                  style={{ textDecoration: "none" }}
                ></Link> */}
                <Link to="#">
                  <button onClick={() => this.validateNewAccount()}>
                    Proceed
                  </button>
                </Link>
              </div>
            </div>
            {/* <div className="add-account-right-content">
              <div>
                <h5>Message</h5>
                <p>Lorem Ipsum</p>
              </div>
            </div> */}
          </div>
          <div className="add-account-footer">
            <p>T & C Apply</p>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  // debugger;
  // console.log("stats", state.Settlement);
  const { bankDetails } = state.Settlement;
  // console.log("order", orderTransactions);

  return { bankDetails };
};

export default withRouter(
  connect(mapStatetoProps, { addBankDetail })(AddNewAccount)
);

// export default AddNewAccount;
