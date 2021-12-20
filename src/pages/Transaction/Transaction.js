import React from "react";
import { Component } from "react";
import { Row, Col } from "reactstrap";
import AmountAndTransaction from "./AmountAndTransaction";

import ContentNav from "./ContentNav";
import SearchTransaction from "./SearchTransaction";
import "./transaction.css";
import TranTable from "./TranTable";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { fetchOrderTransactions } from "../../store/redux/transaction/actionTransaction";
class Transaction extends Component {
  constructor(props) {
    super(props);
    this.props.fetchOrderTransactions("", "", "");

    let sum = 0;
    if (
      this.props.orderTransactions != null &&
      (this.props.orderTransactions != this.props.orderTransactions.length) != 0
    ) {
      // this.props.orderTransactions((transaction) => {
      //
      //   sum = sum + parseInt(transaction.amount);
      // });
    }
  }

  componentDidMount() {
    // console.log("action", this.props.fetchOrderTransactions());
    //
    // console.log("sum", sum);
    // const totaltransactions =
    //   this.props.orderTransactions != 0 ? this.props.orderTransactions : 0;
    // console.log(this.props.location.pathname);
  }
  //
  render() {
    //
    let sum = 100;

    if (
      this.props.orderTransactions != null &&
      (this.props.orderTransactions != this.props.orderTransactions.length) != 0
    ) {
      // this.props.orderTransactions((transaction) => {
      //
      //   sum = sum + parseInt(transaction.amount);
      // });
    }
    //
    //

    // console.log("sum", sum);
    const totaltransactions =
      this.props.orderTransactions != 0 ? this.props.orderTransactions : 0;

    //
    return (
      <div className="page-content transaction-page">
        <Row>
          <Col>
            <ContentNav />
          </Col>
        </Row>
        <SearchTransaction />

        <AmountAndTransaction
          amountType="Transaction Amount"
          totalAmount={this.props.transaction.totalSum}
          totalTransaction="Total Transactions"
          noOfTransaction={totaltransactions}
          noOfTransaction="0"
        />
        <Row className="latest-transaction-row">
          <Col>
            <TranTable data={this.props.orderTransactions} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  //
  //
  return {
    orderTransactions: state.Order,
    transaction: state.Transaction,
  };
};
export default withRouter(
  connect(mapStatetoProps, { fetchOrderTransactions })(Transaction)
);
