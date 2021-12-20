import React from "react";

const TicketTable = ({
  ticketId,
  ticketTitle,
  ticketClient,
  ticketType,
  // ticketAssignedTo,
  ticketLastActivity,
  ticketStatus,
}) => {
  const setBackground = () => {
    if (ticketStatus === "New") {
      return "#DF8F60";
    } else if (ticketStatus === "Open") {
      return "#DD5C64";
    } else {
      return "#3A44A1";
    }
  };
  return (
    <tr>
      <td>{ticketId}</td>
      <td>{ticketTitle}</td>
      {/* <td>{ticketClient}</td> */}
      <td>{ticketType}</td>
      {/* <td>{ticketAssignedTo}</td> */}
      <td>{ticketLastActivity}</td>
      <td>
        <p style={{ background: setBackground() }}>{ticketStatus}</p>
      </td>
    </tr>
  );
};

export default TicketTable;
