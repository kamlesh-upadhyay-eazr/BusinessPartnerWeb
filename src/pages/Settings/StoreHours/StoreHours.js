import React from "react";
import { Component } from "react";
import SettingsNav from "../SettingsNav";
import { Table } from "reactstrap";
import StoreHourTable from "./StoreHourTabel";
class StoreHours extends Component {
  render() {
    return (
      <div className="store-hours-page page-content transaction-page">
        <SettingsNav />
        <div className="store-hour-content">
          <div>
            <h6>Select Store Date & Time</h6>
            <p>
              If days has not been selected then merchant will be set to open.
            </p>
          </div>
          <Table>
              <StoreHourTable day="Monday" />
              <StoreHourTable day="Tuesday" />
              <StoreHourTable day="Wednesday" />
              <StoreHourTable day="Thursday" />
              <StoreHourTable day="Friday" />
              <StoreHourTable day="Saturday" />
              <StoreHourTable day="Sunday" />
            
          </Table>
          <div className="store-hour-save-btn">
            <button>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreHours;
