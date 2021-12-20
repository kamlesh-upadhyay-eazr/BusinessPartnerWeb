import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./report.css";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { generateReports } from "../../store/redux/report/actionReport";
import { duration } from "moment";

class Reports extends Component {
  constructor() {
    super();
    this.state = {
      report: "",
      duration: "",
      status: "",
      formatType: "",
      email: "",
    };
  }
  render() {
    // console.log(this.state.duration);
    // console.log("order", this.state.report);
    // console.log(this.state.status);
    // console.log(this.state.formatType);
    // console.log(this.state.email);

    return (
      <div className="page-content transaction-page my-orders reports-page">
        <div className="transaction-links">
          <div className="transaction-text-links">
            <ul>
              <li className="mr-2">
                <NavLink
                  activeStyle={{
                    color: " #7062e0",
                    borderBottom: "2px solid #ffcbc4",
                  }}
                  to="/reports"
                >
                  Reports
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="report-page-info mt-4">
          You can generate new reports or download from the list of recently
          generated reports
        </div>
        <div className="select-report-type">
          <div className="select-report-heading">Select Report Type</div>
          <div className="report-option">
            <select
              name=""
              id=""
              onChange={(report) =>
                this.setState({
                  report: report.target.value,
                })
              }
            >
              <option value="transaction">Transaction Reports</option>
              <option value="settlement">Settlement Reports</option>
              {/* <option value="product">Product Reports</option>
              <option value="order">Order Reports</option> */}
            </select>
          </div>
          <div className="report-desc">
            This report provides a list of the settlements in selected time
            range.It does not include details of the transactions that were
            settled. Details include settlements ID , Date,UTR, and others.
          </div>
        </div>
        <div className="report-page-form">
          <div className="input-field-div">
            <div className="input-field">
              <label htmlFor="">Select Duration</label>
              <br />
              <select
                name=""
                id=""
                onChange={(duration) =>
                  this.setState({
                    duration: duration.target.value,
                  })
                }
              >
                <option value="Today">Today</option>
                <option value="This Week">This Week</option>
                <option value="This Month">This Month</option>
              </select>
            </div>
            <div className="input-field">
              <label htmlFor="">Status</label>
              <br />
              <select
                name=""
                onChange={(status) =>
                  this.setState({
                    status: status.target.value,
                  })
                }
                id=""
              >
                <option>All</option>
                <option value="Pending">Pending</option>
                <option value="Success">Success</option>
              </select>
            </div>
          </div>
          <div className="input-field-div">
            <div className="input-field">
              <label htmlFor="">Select Format Type</label>
              <br />
              <select
                name=""
                id=""
                onChange={(formatType) =>
                  this.setState({
                    formatType: formatType.target.value,
                  })
                }
              >
                <option value="PDF">.PDF</option>
                <option value="xslx">.xslx</option>
                <option value="csv">.csv</option>
              </select>
            </div>
            <div className="input-field">
              <label htmlFor="">Select Email ID</label>
              <br />
              <select
                name=""
                id=""
                onChange={(email) =>
                  this.setState({
                    email: email.target.value,
                  })
                }
              >
                <option>Receive report via Email</option>
                <option value="abc@eazr.in">abc@eazr.in</option>
                <option value="xyz@gmai.com">xyz@gmai.com</option>
              </select>
            </div>
          </div>
          <div className="generate-btn">
            <button
              onClick={() =>
                this.props.generateReports(
                  // this.state.formatType,
                  // this.state.status,
                  // this.state.duration,
                  this.state.report

                  // this.state.email
                )
              }
            >
              {/* console.log(this.state.duration); console.log(this.state.report);
              console.log(this.state.status);
              console.log(this.state.formatType); console.log(this.state.email); */}
              Generate Report
            </button>
          </div>
        </div>
        <div className="recent-report mt-5">Recent Report</div>
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  const { reports } = state.Report;
  // console.log("order", orderTransactions);
  return { reports };
};
export default withRouter(
  connect(mapStatetoProps, { generateReports })(Reports)
);
// export default Reports;
