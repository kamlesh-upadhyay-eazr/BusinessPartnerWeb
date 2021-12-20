import React from "react";
import CreateTicketModal from "./CreateTicketModal";
const SearchTicket = () => {
  return (
    <div className="search-tickets">
      <div className="d-flex justify-content-around search-ticket-content">
        <div className="search-ticket-input">
          <input type="text" placeholder="Ticket ID Search here" />
        </div>
        <div className="search-ticket-btn">
          <button>Search</button>
        </div>
        <div>
          <select name="" id="">
            <option value="">-Ticket Type-</option>
            <option value="">General Support</option>
          </select>
        </div>
        <div>
          <select name="" id="">
            <option value="">-Created At-</option>
            <option value="">In last 2 days</option>
            <option value="">In last 7 days</option>
            <option value="">In last 15 days</option>
            <option value="">In last 1 month</option>
            <option value="">In last 3 months</option>
          </select>
        </div>
        <div className="download-options">
          <button>Excel</button>
          <button>Print</button>
        </div>
        {/* <div className="ticket-filter">
              <i class="fas fa-plus font-size-10">
                {" "}
                <span className="font-size-12">Add filter</span>{" "}
              </i>
            </div> */}
      </div>
      <div className="create-ticket-modal">
        <CreateTicketModal />
      </div>
    </div>
  );
};

export default SearchTicket;
