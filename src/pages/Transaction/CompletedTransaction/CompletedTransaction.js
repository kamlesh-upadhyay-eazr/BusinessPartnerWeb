import React, { Component } from "react";
import { Table, Row, Col } from "reactstrap";
import ContentNav from "../ContentNav";
import TransactionTableRow from "../../Dashboard/TransactionTableRow";
import TranTableHeading from "../../Dashboard/TranTableHeading";
import SearchTransaction from "../SearchTransaction";
import AmountAndTransaction from "../AmountAndTransaction";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { ip } from "../../../config/config";
import {
  fetchOrderTransactions,
  fetchCompletedTransaction,
} from "../../../store/redux/transaction/actionTransaction";
class CompletedTransaction extends Component {
  constructor(props) {
    super(props);
    this.props.fetchCompletedTransaction();
  }
  componentDidMount() {
    //
    // const totalCompletedTransactions =
    //   this.props.orderTransactions != 0 ? this.props.orderTransactions : 0;
    // this.props.fetchCompletedTransaction();
  }
  render() {
    // for total amount
    let sum = 100;

    if (this.props.ordertransactions) {
      this.props.ordertransactions.forEach((transaction) => {
        transaction.status.status === "completed" &&
          (sum = sum + parseInt(transaction.amount));
      });
    }
    // const totaltransactions = this.props.ordertransactions
    //   ? this.props.ordertransactions.filter(
    //       (f) => f.status.status === "successful"
    //     ).length
    //   : // .map((item) => item._id).length
    //     0;
    // console.log("total", totaltransactions);

    const totalCompletedTransactions =
      this.props.orderTransactions != 0 ? this.props.orderTransactions : 0;

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
          totalAmount={"10"}
          totalTransaction="Total Transactions"
          totalTransaction={"totalTransactions"}
          noOfTransaction={"5"}
        />
        <Row className="transaction-table-row">
          <Col>
            <Table
              bordered
              // hover
              style={{ background: "#1d1d1f" }}
              className="latest-transaction-table"
            >
              <TranTableHeading />
              <tbody>
                {this.props.ordertransactions != null ? (
                  this.props.ordertransactions
                    .filter((f) => f.status.status === "Completed")
                    .map((item) => {
                      console.log("item..", item);
                      return (
                        <TransactionTableRow
                          paymentId={item.paymentId}
                          eazrPayOrderId={item._id}
                          orderId={item.orderId}
                          amount={`₹ ${item.amount}`}
                          emailId={item.businessPartner.email}
                          contact={item.businessPartner.phone}
                          createdAt={item.createdAt}
                          status={item.status.status}
                        />
                      );
                    })
                ) : (
                  <h6
                    style={{
                      flex: 1,
                      display: "flex",
                      width: "100%",
                      textAlign: "center",
                      padding: 10,
                      justifyContent: "center",
                      // backgroundColor: "#000",
                    }}
                  >
                    No data found
                  </h6>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  //  console.log("state ", state.Transaction);
  const ordertransactions = state.Transaction.completedTransactions;
  return { ordertransactions };
};
export default withRouter(
  connect(mapStatetoProps, { fetchCompletedTransaction })(CompletedTransaction)
);
// export default CompletedTransaction;
