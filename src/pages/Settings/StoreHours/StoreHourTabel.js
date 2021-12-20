import React from "react";
// import Table from "reactstrap/lib/Table";

const StoreHourTable = ({ day }) => {
  return (
    <>
      <div className="store-hour-table">
        <div className="store-hour-table-content py-3">
          <div className="checkbox-td">
            <input type="checkbox" /> <label htmlFor="checkbox">{day}</label>
          </div>
          <div>
            <select name="" id="">
              <option>Start Time</option>
              <option value="">01:00</option>
              <option value="">02:00</option>
              <option value="">03:00</option>
              <option value="">04:00</option>
            </select>
            <span>To</span>
            <select name="" id="">
              <option>End Time</option>
              <option value="">01:00</option>
              <option value="">02:00</option>
              <option value="">03:00</option>
              <option value="">04:00</option>
            </select>
          </div>
          <div>/</div>
          <div>
            <select name="" id="">
              <option>Start Time</option>
              <option value="">01:00</option>
              <option value="">02:00</option>
              <option value="">03:00</option>
              <option value="">04:00</option>
            </select>
            <span>To</span>
            <select name="" id="">
              <option>End Time</option>
              <option value="">01:00</option>
              <option value="">02:00</option>
              <option value="">03:00</option>
              <option value="">04:00</option>
            </select>
          </div>
          <div>
            <input type="text" placeholder="Custom Text" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreHourTable;
