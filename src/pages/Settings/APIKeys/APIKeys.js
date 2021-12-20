import React from "react";
import { Component } from "react";
import Table from "reactstrap/lib/Table";
import SettingsNav from "../SettingsNav";
// import StoreHourTable from "../StoreHours/StoreHourTabel";

class APIKeys extends Component {
  render() {
    return (
      <div className="api-keys-page page-content transaction-page">
        <SettingsNav />
        <div className="api-page-content">
          <div>
            <h6>API Key List</h6>
          </div>
          <Table className="api-list-table" borderless>
            <thead>
              <tr>
                <th>Key ID</th>
                <th>Created At</th>
                <th>Expiry</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>pay_foB8deixfgGjLj</td>
                <td>30 Dec 2021,01:50:26pm</td>
                <td>Never</td>
                <td>
                  <button>
                    <i className="fas fa-sync-alt mr-2"></i>Re_generate Live Key
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default APIKeys;
