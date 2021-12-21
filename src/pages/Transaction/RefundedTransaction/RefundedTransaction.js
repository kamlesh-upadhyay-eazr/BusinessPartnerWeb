import React, { Component } from "react";
import { Table, Row, Col } from "reactstrap";
import ContentNav from "../ContentNav";
import TransactionTableRow from "../../Dashboard/TransactionTableRow";
import TranTableHeading from "../../Dashboard/TranTableHeading";
import SearchTransaction from "../SearchTransaction";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import AmountAndTransaction from "../AmountAndTransaction";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOrderTransactions } from "../../../store/redux/transaction/actionTransaction";
class RefundedTransaction extends Component {
  componentDidMount() {
    this.props.fetchOrderTransactions();
  }
  render() {
    let sum = 0;

    if (this.props.ordertransactions) {
      this.props.ordertransactions.forEach((transaction) => {
        transaction.status.status === "refund" &&
          (sum = sum + parseInt(transaction.amount));
      });
    }
    const totaltransactions = this.props.ordertransactions
      ? this.props.ordertransactions.filter((f) => f.status.status === "refund")
          .length
      : // .map((item) => item._id).length
        0;
    console.log("total", totaltransactions);
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
          totalAmount={sum}
          totalTransaction="Total Transactions"
          noOfTransaction={totaltransactions}
        />
          <Loader
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            type="ThreeDots"
            color="#FFF"
            height={70}
            width={70}
            timeout={500} //3 secs
          />
        <Row className="transaction-table-row">
          <Col>
            <Table
              bordered
              // hover
              style={{ background: "#1d1d1f" }}
              className="latest-transaction-table"
            >
              {/* <TranTableHeading /> */}
              <tbody>
                {this.props.ordertransactions != null ? (
                  this.props.ordertransactions
                    .filter((f) => f.status.status === "refund")
                    .map((item) => {
                      console.log("item..", item);
                      return (
                        <TransactionTableRow
                          paymentId={item.paymentId}
                          eazrPayOrderId={item._id}
                          orderId={item.orderId}
                          amount={`₹ ${item.amount}`}
                          emailId={item.customer.email}
                          contact={item.customer.phone}
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
                    {" "}
                    No data found{" "}
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
  const { transactions } = state.Transaction;
  return { transactions };
};
export default withRouter(
  connect(mapStatetoProps, { fetchOrderTransactions })(RefundedTransaction)
);
// export default RefundedTransaction;
