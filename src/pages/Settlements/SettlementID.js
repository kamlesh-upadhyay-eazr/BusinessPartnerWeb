import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Breadcrumb, BreadcrumbItem } from "reactstrap";
// import Button from 'reactstrap/lib/Button';
import "./settlements.css";

class SettlementID extends Component {
  state = {
    showCard: true,
  };

  showCard = () => {
    this.setState({
      showCard: !this.state.showCard,
    });
  };
  render() {
    console.log("settlement", this.props.location.state);
    return (
      <>
        <div className="page-content settlement-id ">
          <Container fluid>
            <div>
              <Breadcrumb tag="nav" listTag="div">
                <Link to="/settlements" style={{ textDecoration: "none" }}>
                  <i
                    className="fas fa-arrow-left mt-1 mr-4"
                    style={{ color: "#7062e0" }}
                  ></i>
                </Link>
                <BreadcrumbItem style={{ color: "#7062e0"}}tag="a" href="/settlements">
                  All Settlements
                </BreadcrumbItem>
                <BreadcrumbItem
                  tag="a"
                  href="#"
                  active
                  style={{ color: "#ffffff" }}
                >
                  Settlement Id : {this.props.match.params.id}
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Container>
          <Container fluid style={{ background: "#1D1D1F" }}>
            <div className="settlement-id-content">
              <div className="settlement-id-nav pt-3">
                <Link>{this.props.match.params.id}</Link>
              </div>
              <hr />
              <div className="settled-amount w-100 d-block">
                <div className="d-flex justify-content-end ">
                  <h6>Total Settled Amount</h6>
                  <p className="mx-2">
                    &#8377; {this.props.location.state.amount}
                  </p>
                  <i class="fas fa-question-circle font-size-20"></i>
                </div>
              </div>
              <div className="settlement-id-details d-flex">
                <div className="settlement-left-details">
                  <table>
                    <tr>
                      <td>Status</td>
                      <td>
                        <div className="settlement-left-details-btn">
                          {this.props.location.state.status}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Created At</td>
                      <td>{this.props.location.state.createdAt} </td>
                    </tr>
                    <tr>
                      <td>Fees</td>
                      <td>&#8377; 19.02</td>
                    </tr>
                    <tr>
                      <td>Tax</td>
                      <td>&#8377; 00.02</td>
                    </tr>
                    <tr>
                      <td>UTR</td>
                      <td>AXISCN0055421103</td>
                    </tr>
                  </table>
                </div>
                <div className="settlement-right-details">
                  <div>
                    <div className="first-ticket">
                      <div className="settled-amount w-100">
                        <div className="d-flex justify-content-start credit-amount">
                          <h6>Total Credit Amount</h6>
                          <p className="mx-2">
                            &#8377; {this.props.location.state.amount}
                          </p>
                          <i class="fas fa-question-circle font-size-20"></i>
                        </div>
                        <div
                          className="green-ticket  w-100 my-2 pt-2"
                          style={{ background: "#000000" }}
                        >
                          <div className="d-flex text-center  justify-content-around">
                            <h6 className="mt-3">Payment</h6>
                            <div>
                              <span>Type</span>
                              <p>Credit</p>
                            </div>
                            <div>
                              <span>Count</span>
                              <p>2</p>
                            </div>
                            <div>
                              <span>Amount</span>
                              <p>&#8377; {this.props.location.state.amount}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="second-ticket"
                      style={{
                        display: this.state.showCard ? "block" : "none",
                      }}
                    >
                      <div className="settled-amount w-100">
                        <div className="d-flex justify-content-start mt-5">
                          <h6>Total Debit Amount</h6>
                          <p className="mx-2">&#8377; 19.02</p>
                          <i class="fas fa-question-circle font-size-20"></i>
                        </div>
                        <div
                          className="orange-ticket  w-100 pt-2"
                          style={{ background: "#000000" }}
                        >
                          <div className="d-flex text-center  justify-content-around">
                            <h6 className="mt-3">Tax</h6>
                            <div>
                              <span>Type</span>
                              <p>Debit</p>
                            </div>
                            <div>
                              <span>Count</span>
                              <p>--</p>
                            </div>
                            <div>
                              <span>Amount</span>
                              <p>&#8377; 00.00</p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="orange-ticket  w-100 my-2 pt-2"
                          style={{ background: "#000000" }}
                        >
                          <div className="d-flex text-center  justify-content-around">
                            <h6 className="mt-3">Fee</h6>
                            <div>
                              <span>Type</span>
                              <p>Debit</p>
                            </div>
                            <div>
                              <span>Count</span>
                              <p>--</p>
                            </div>
                            <div>
                              <span>Amount</span>
                              <p>&#8377; 19.02</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="show-btn mt-5 mb-4 w-100">
                      {this.state.showCard ? (
                        <button className="d-flex" onClick={this.showCard}>
                          Show Less
                          <i class="fas fa-angle-up font-size-20 pl-2"></i>
                        </button>
                      ) : (
                        <button className="d-flex" onClick={this.showCard}>
                          Show More
                          <i class="fas fa-angle-down font-size-20 pl-2"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default SettlementID;
