import React, { useEffect } from "react";
import TicketTable from "../TicketTable";
import { Table } from "reactstrap";
import HelpAndSupportNav from "../../HelpAndSupportNav";
import SearchTicket from "../SearchTicket";
import { useDispatch, useSelector } from "react-redux";

import { getTickets } from "../../../../store/redux/ticket/actionSupport";
const OpenTicket = (props) => {
  // console.log("props", props);
  const dispatch = useDispatch();
  const getticket = useSelector((state) => state.Ticket);
  const allticket = getticket.tickets;
  // console.log("all", allticket);

  useEffect(() => {
    dispatch(getTickets());
  }, []);
  return (
    <div className="need-help-page page-content transaction-page open-ticket-page">
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
            {allticket != null
              ? allticket
                  .filter((f) => f.status.status === "Open")
                  .map((item) => {
                    console.log("item", item);
                    return (
                      <TicketTable
                        ticketId={item._id}
                        ticketTitle={item.title}
                        // ticketClient="XYZ Brand"
                        ticketType={item.type.type}
                        // ticketAssignedTo="Omkar "
                        ticketLastActivity={item.lastActivity}
                        ticketStatus={item.status.status}
                      />
                    );
                  })
              : 0}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

// const mapStatetoProps = (state) => {
//   // console.log("staate", state.Ticket);
//   const { tickets } = state.Ticket;
//   // console.log("order", orderTransactions);

//   return { tickets };
// };

// export default withRouter(connect(mapStatetoProps, { getTickets })(OpenTicket));
export default OpenTicket;
