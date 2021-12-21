import React, { Component } from "react";
import SettlementNav from "./SettlementNav";
import { Row, Col } from "reactstrap";
import "../Transaction/transaction.css";
import { Table } from "reactstrap";
import "./settlements.css";
import SingleSettlement from "./SingleSettlement";
import SearchSettlements from "./SearchSettlements";
import ReactPaginate from "react-paginate";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AmountAndTransaction from "../Transaction/AmountAndTransaction";

import { fetchSettlements } from "../../store/redux/settlements/actionsettlements";

class Settlements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      pageNumber: 0,
      currentPage: 0,
      searchSettlements: null,
      filterSettlements: null,
    };
    // this.handlePageClick = this
    //         .handlePageClick
    //         .bind(this);
  }
  componentDidMount() {
    this.props.fetchSettlements();
    // console.log(this.props.settlements);
  }

  render() {
    const usersPerPage = 10;
    const pageVisited = this.state.pageNumber * usersPerPage;

    const pageCount = Math.ceil(this.props.settlements?.length / usersPerPage);

    const changePage = ({ selected }) => {
      this.setState({ pageNumber: selected });
    };
    // for total amount

    const sum =
      this.props.settlements?.length > 0 && this.props.settlements?.length != 0
        ? this.props.settlements
            .map((item) => item.amount)
            .reduce((a, b) => Number(a) + Number(b))
        : 0;
    // sum += parseFloat(item.amount);
    // for total transactions
    const totaltransactions = this.props.settlements
      ? this.props.settlements.length
      : 0;

    const filterArray = () => {
      if (
        this.state.searchSettlements !== null &&
        this.state.searchSettlements.length > 0
      ) {
        const filter = this.props.settlements.filter((trans) => {
          return trans._id.includes(this.state.searchSettlements);
        });
        this.setState(filter);
      }
    };
    console.log("settlement", this.props.settlements);

    const getSearchSettlementValues = (value) => {
      this.setState({ searchSettlements: value });
      debugger;
    };

    return (
      <div className="page-content settlement-page transaction-page">
        <Row>
          <Col>
            <SettlementNav />
          </Col>
        </Row>
        <SearchSettlements
          getSearchSettlementValues={getSearchSettlementValues}
          filterArray={filterArray}
        />

        <AmountAndTransaction
          amountType="Settlement Amount"
          totalAmount={sum}
          totalTransaction="Total Transactions"
          noOfTransaction={totaltransactions}
        />

        <Row>
          <Col className="settlement-table">
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
              timeout={500} // 0.5 sec
            />
            <Table bordered className="text-center">
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
              <tbody>
                {this.state.filterSettlements ? (
                  this.state.filterSettlements.map((item) => {
                    return (
                      <SingleSettlement
                        data={item}
                        settlementId={item._id}
                        amount={item.amount}
                        fees="₹19.02"
                        tax="₹0.02"
                        date={item.createdAt}
                        time={item.createdAt}
                        status={item.status.status}
                      />
                    );
                  })
                ) : this.props.settlements != null ? (
                  this.props.settlements
                    .slice(pageVisited, pageVisited + usersPerPage)
                    .map((item) => {
                      return (
                        <SingleSettlement
                          data={item}
                          settlementId={item._id}
                          amount={item.amount}
                          fees="₹19.02"
                          tax="₹0.02"
                          date={item.createdAt}
                          time={item.createdAt}
                          status={item.status.status}
                        />
                      );
                    })
                ) : (
                  <h6
                    style={{
                      display: "flex",
                      paddingLeft: "20rem",
                      paddingTop: "2px",
                    }}
                  >
                    No data found
                  </h6>
                )
                }
              </tbody>
            </Table>
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
            {/* <div className="settlement-pagination w-100">
              <p className="float-right font-size-12">Showing 1 of 2</p>
            </div> */}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  const { settlements } = state.Settlement;
  return { settlements };

  // console.log("stats", state.Settlement);
  // console.log("order", orderTransactions);
};

export default withRouter(
  connect(mapStatetoProps, { fetchSettlements })(Settlements)
);

// export default Settlements;
