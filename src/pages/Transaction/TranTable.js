import React from "react";
import TransactionTableRow from "../Dashboard/TransactionTableRow";
import { Table } from "reactstrap";
import TranTableHeading from "../Dashboard/TranTableHeading";
import moment from "moment";
import { connect } from "react-redux";
const TranTable = (props) => {
  console.log(props.transaction);
  return (
    <>
      {props.transaction?.transactions != null ? (
        <Table
          bordered
          // hover
          style={{
            flex: 1,
            backgroundColor: "#1d1d1f",
            width: "50%",
            overflowX: "scroll",
          }}
          className="latest-transaction-table"
        >
          <TranTableHeading />

          <tbody>
            {props.transaction.transactions.map((item) => {
              console.log(item);
              // props.data.map((this.state.props.ordertransaction))
              // console.log("item", props.transaction.transactions.order);
              return (
                <TransactionTableRow
                  paymentId={item.paymentId}
                  eazrPayOrderId={item._id}
                  orderId={item.orderId}
                  amount={`₹ ${item.amount}`}
                  emailId={item.user.email}
                  contact={item.user.phone}
                  date={item.createdAt}
                  time={item.createdAt}
                  status={item.status.status}
                />
              );
            })}
          </tbody>
        </Table>
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
    </>
  );
};
// console.log(this.props.orderTransactions);
// ;
const mapStateToProps = (state) => {
  return {
    transaction: state.Transaction,
    // orderTransactions: state.orderTransaction,
  };
};

export default connect(mapStateToProps, null)(TranTable);
