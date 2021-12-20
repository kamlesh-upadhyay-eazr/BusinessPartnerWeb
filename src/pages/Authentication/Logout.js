import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../store/redux/auth/actionAuth";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("logout", this.props.logout(this.props.history));
    // Fire Action for Remove all Item from localstorage and redirect to login page
    this.props.logout(this.props.history);
  }

  render() {
    return (
      <React.Fragment>
        <h1>&nbsp;</h1>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(null, { logout })(Logout));
