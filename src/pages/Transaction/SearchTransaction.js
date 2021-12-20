import React, { useState } from "react";

const SearchTransaction = () => {
  const [filter, setFilters] = useState(false);
  const showFilter = () => {
    setFilters(!filter);
  };

  const [search, setSearch] = useState({
    paymentId: "",
    orderId: "",
    status: "",
    email: "",
  });

  // console.log(search);
  return (
    <>
      <div
        className="all-transaction-form"
        style={{ display: !filter ? "none" : "block" }}
      >
        <form action="">
          <div className="first d-flex">
            <div>
              <label>Payment ID</label>
              <input
                type="text"
                onChange={(text) =>
                  setSearch({
                    ...search,
                    paymentId: text.target.value,
                  })
                }
              />
            </div>

            <div>
              <label>Order ID</label>
              <input
                type="text"
                onChange={(text) =>
                  setSearch({
                    ...search,
                    orderId: text.target.value,
                  })
                }
              />
            </div>
            <div>
              <label>Status</label>

              <select
                onChange={(text) =>
                  setSearch({
                    ...search,
                    status: text.target.value,
                  })
                }
              >
                <option>All</option>
                <option>Completed</option>
                <option>Refunded</option>
                <option>Failed</option>
              </select>
            </div>
            <div>
              <label>Email ID</label>

              <input
                type="email"
                className="email-input"
                onChange={(text) =>
                  setSearch({
                    ...search,
                    email: text.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="d-flex tran-form-btn">
            <div className="search-btn">
              <button>Search</button>
            </div>
            <div className="clear-btn">
              <button type="reset">Clear</button>
            </div>
          </div>
        </form>
      </div>
      <i
        style={{ top: !filter && "32%" }}
        className="fas fa-filter"
        onClick={showFilter}
      ></i>
    </>
  );
};

export default SearchTransaction;
