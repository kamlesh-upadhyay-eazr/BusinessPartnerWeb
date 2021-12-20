import React, { useState } from "react";

const HeaderTable = () => {
  const [headers, setHeaders] = useState([
    "Header 1",
    "Header 2",
    "Header 3",
    "Header 4",
  ]);
  const [column, setColumn] = useState(1);
  const [showCrossIcon, setShowCrossIcon] = useState(false);
  const headerData = [];

  const addData = () => {
    for (var i = 0; i < headers.length; i++) {
      headerData.push(
        <td>
          <input type="text" />
        </td>
      );
    }
  };

  const removeColumn = () => {
    setColumn(column - 1);
    headers.pop();
  };

  const addColumns = () => {
    setColumn(column + 1);
    headers.push(`Header ${headers.length + 1}`);
  };

  const displayCrossIcon = () => {
    setShowCrossIcon(!showCrossIcon);
  };

  const addHeader = () => {
    setHeaders(["Header 1", "Header 2", "Header 3", "Header 4"]);
  };

  // const disableBtn = () => {
  //   if (headers.length > 0) {
  //     return disabled;
  //   }
  // };

  return (
    <>
      <div className="d-flex  justify-content-between header-table-btns">
        <div className="header-btn d-flex mb-3">
          <div className="create-header-btn">
            <button
              disabled={headers.length > 0 ? true : false}
              onClick={addHeader}
              style={{ background: headers.length > 0 ? "#2c2c2c" : "#3A44A1" }}
            >
              Create Header
            </button>
          </div>
          <div className="add-more-btn">
            <button onClick={addColumns}>
              <i
                class="fas fa-plus font-size-10 mr-2"
                style={{
                  color: "#ffffff",
                }}
              ></i>
              Add More
            </button>
          </div>
        </div>
        <div className="edit-header-btn">
          <button style={{ float: "right" }} onClick={displayCrossIcon}>
            <i
              class="fas fa-edit mr-2"
              style={{
                color: "#424242",
              }}
            ></i>
            Edit Header
          </button>
        </div>
      </div>
      <table className="header-table my-4" style={{ overflowX: "scroll" }}>
        <thead>
          <tr>
            {addColumns}
            {headers.map((header) => {
              return <th>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {addData()}
            {headerData.map((data) => {
              return data;
            })}
          </tr>
        </tbody>
      </table>

      <i
        class="far fa-times-circle fa-2x cross-icon"
        style={{
          color: "#DD5C64",
          display: !showCrossIcon ? "none" : "block",
          visibility: headers.length === 0 && "hidden",
        }}
        onClick={removeColumn}
      ></i>
    </>
  );
};

export default HeaderTable;
