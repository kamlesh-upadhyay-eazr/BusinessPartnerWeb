import React, { Component } from "react";
import SettlementNav from "./SettlementNav";
import { Row, Col } from "reactstrap";
import "../Transaction/transaction.css";
import { Table } from "reactstrap";
// import { Link } from "react-router-dom";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./settlements.css";
import SingleSettlement from "./SingleSettlement";
import SearchSettlements from "./SearchSettlements";
import AmountAndTransaction from "../Transaction/AmountAndTransaction";
import ClipLoader from "react-spinners/ClipLoader";

import { fetchSettlements } from "../../store/redux/settlements/actionsettlements";
class CompleteSettlements extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchSettlements();
  }
  render() {
    console.log("log", this.props.settlements);

    let data;

    if (!this.props.settlements) {
      data = (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "60vh" }}
        >
          <ClipLoader color="#fff" size="50" />
        </div>
      );
    } else if (this.props.settlements && this.props.settlements.length > 0) {
      let filtered = this.props.settlements.filter(
        (e) => (e.status ? e.status === "Successfull" : "no data")
        // .filter(a => new Date(a.startDate) - new Date > 0);
        // e.status.orderStatus === "Preparing"
      );
      data = filtered
      .map((t) => {
        console.log("t", t);
        return (
          <SingleSettlement
            settlementId={t._id}
            amount={t.amount}
            fees="₹19.02"
            tax="₹0.02"
            createdAt={t.createdAt}
            status="Completed"
            data={t}
          />
        );
      });
    } else {
      data = (
        <h6 style={{ textAlign: "center", paddingLeft: "20rem" }}>
          No data found
        </h6>
      );
    }
    console.log("render", data);

    return (
      <div className="page-content settlement-page transaction-page">
        <Row>
          <Col>
            <SettlementNav />
          </Col>
        </Row>
        <SearchSettlements />
        <AmountAndTransaction
          amountType="Settlement Amount"
          totalAmount="0"
          totalTransaction="Total Transactions"
          noOfTransaction="0"
        />
        <Row>
          <Col className="settlement-table">
            <Table bordered hover className="text-center">
              <thead style={{ background: "#000", color: "#fff" }}>
                <tr>
                  <th>Settlement ID</th>
                  <th>Amount</th>
                  <th>Fees</th>
                  <th>Tax</th>
                  <th>Created At</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>{data}</tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="settlement-footer text-center w-100 mt-5">
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
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="settlement-pagination w-100">
              <p className="float-right font-size-12">Showing 1 of 2</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  const { settlements } = state.Settlement;
  return {
    settlements,
  };
};

export default withRouter(
  connect(mapStatetoProps, { fetchSettlements })(CompleteSettlements)
);
// export default CompleteSettlements;
