import React, { Component } from "react";
import BNPL from "./BNPL";
import FAQNav from "./FAQNav";
import { fetchfaq } from "../../../store/redux/faq/actionFaq";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class FAQs extends Component {
  constructor(props) {
    super(props);
  }
    componentDidMount() {
    // console.log("action", this.props.fetchOrderTransactions());
    // this.props.fetchfaq();

    console.log(this.props.FETCH_FAQ);
  }
  render() {
    return (
      <div className="faq-page page-content transaction-page">
        <FAQNav />
        <div className="faq-page-content">
          <BNPL />

          {/* <BNPL />
          <BNPL />
          <BNPL />
          <BNPL />
          <BNPL /> */}
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  //  console.log("state ", state.Transaction);
  // const { fetchfaq } = state.Order;
  // return { fetchfaq };
};
export default withRouter(
  connect(mapStatetoProps, { })(FAQs)
);

// export default FAQs;

