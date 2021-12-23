import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {} from "../../store/actions";

//Simple bar
import SimpleBar from "simplebar-react";

import SidebarContent from "./SidebarContent";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="vertical-menu" style={{ background: "#1D1D1F" }}>
          <div data-simplebar className="h-100">
            {this.props.type !== "condensed" ? (
              <SimpleBar style={{ maxHeight: "100%" }}>
                <SidebarContent />
              </SimpleBar> 
            ) : (
              <SidebarContent />
              
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    layout: state.Layout,
  };
};
export default connect(mapStatetoProps, {})(withRouter(Sidebar));
