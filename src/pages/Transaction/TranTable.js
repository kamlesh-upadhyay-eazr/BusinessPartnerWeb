import React, {useState} from "react";
import TransactionTableRow from "../Dashboard/TransactionTableRow";
import { Table } from "reactstrap";
import TranTableHeading from "../Dashboard/TranTableHeading";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import moment from "moment";
import { Row, Col } from "reactstrap";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
const TranTable = (props) => {

  
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  
  const pageCount = Math.ceil(
    props.transaction.transactions?.length / usersPerPage
    );
    
    const  changePage = ({ selected }) => {
      setPageNumber(selected);
    };
    console.log(props.transaction);
    
    return (
      <>
        <Loader
          style={{
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
        <Row>
          {props.transaction?.transactions != null ? (
            <>
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
                  
                  {props.transaction.transactions
                    .slice(pagesVisited, pagesVisited + usersPerPage)
                    .map((item) => {
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
            </>
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
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </Row>
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
