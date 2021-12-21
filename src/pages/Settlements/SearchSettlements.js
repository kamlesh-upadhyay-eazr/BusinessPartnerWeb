import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingBankDetails } from "../../store/redux/settlements/actionsettlements";

const SearchSettlements = ({getSearchSettlementValues, filterArray }) => {
  const dispatch = useDispatch();
  // const [filter, setFilter] = useState(false);
  const [filter, setFilter] = useState(null);
  const [searchTerm, setsearchTerm] = useState(null);
  const [search, setSearch] = useState(null);
  const showFilter = () => {
    setFilter(!filter);
    // console.log(filter);
  };

  useEffect(() => {
    dispatch(fetchingBankDetails());
  }, []);
  const { settlements } = useSelector((state) => state.Settlement);
  //const filteredstate = useSelector((state) => state.Settlement.bankDetails);
  console.log("settlements", settlements);

  
  const onChange = (e) => {
    getSearchSettlementValues(e.target.value);
    setSearch(e.target.value);
    filterArray();
  };
  return (
    <>
      {/* <div style={{display: 'flex', flexDirection:'row'}}> */}
      <div
        className="all-transaction-form"
        style={{ display: !filter ? "none" : "block" }}
      >
        <div className="all-settlements-form d-flex justify-content-between">
          <div className="third d-flex">
            <div>
              <label>Settlement ID</label>
              <br />
              <input
                style={{ height: "2rem" }}
                type="text"
                value={search}
                placeholder="search..."
                // onChange={(event) => setsearchTerm(event.target.value)}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="d-flex tran-form-btn">
              <div className="search-btn">
                <button>Search</button>
                {/* onClick={() => console.log("searcher")} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <i
          style={{ top: !filter && "8.6%" }}
          className="fas fa-filter"
          onClick={showFilter}
        ></i>
      </div>
      {/* </div> */}
    </>
  );
};

export default SearchSettlements;

// else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
// data.country.toLowerCase().includes(this.state.search.toLowerCase())){
//           return data
//       }
