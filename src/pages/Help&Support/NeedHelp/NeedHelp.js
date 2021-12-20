import React from "react";
import { Component } from "react";
import HelpAndSupportNav from "../HelpAndSupportNav";

import { Table } from "reactstrap";
import "../helpAndSupport.css";
import TicketTable from "./TicketTable";
import SearchTicket from "./SearchTicket";
import Eaza from "../../../components/Eaza/Eaza";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getTickets } from "../../../store/redux/ticket/actionSupport";
class NeedHelp extends Component {
  componentDidMount() {
    this.props.getTickets();
  }
  render() {
    console.log("props", this.props.tickets);
    return (
      <div className="need-help-page page-content transaction-page">
        <HelpAndSupportNav />
        <SearchTicket />
        <div className="ticket-list-table">
          <Table bordered hover className="text-center">
            <thead>
              <th>Ticket ID</th>
              <th>Title</th>
              {/* <th>Client</th> */}
              <th>Ticket Type</th>
              <th>Last Activity</th>
              <th>Status</th>
            </thead>
            <tbody className="ticket-row">
              {this.props.tickets != null
                ? this.props.tickets.map((item) => {
                    console.log("item", item);
                    return (
                      <TicketTable
                        ticketId={item._id}
                        ticketTitle={item.title}
                        // ticketClient="XYZ Brand"
                        ticketType={item.description}
                        // ticketAssignedTo="Omkar "
                        ticketLastActivity={item.lastActivity}
                        ticketStatus={item.status.status}
                      />
                    );
                  })
                : <h6 style={{display:'flex', justifyContent: 'center', paddingLeft: '22rem',paddingTop:'3px',
                 alignItems: 'center', textAlign: 'center'}}> No data found </h6>}
            </tbody>
          </Table>
          <Eaza />
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  // console.log("staate", state.Ticket);
  const { tickets } = state.Ticket;
  // console.log("order", orderTransactions);

  return { tickets };
};

export default withRouter(connect(mapStatetoProps, { getTickets })(NeedHelp));
