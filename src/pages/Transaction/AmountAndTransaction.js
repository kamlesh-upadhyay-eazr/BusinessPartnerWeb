import React from "react";

const AmountAndTransaction = ({
  amountType,
  totalAmount,
  totalTransaction,
  noOfTransaction,
}) => {
  return (
    <div className="amount-and-transaction">
      <div>
        <h5>{amountType}</h5>
        <h2>{totalAmount}</h2>
      </div>
      <div>
        <h5>{totalTransaction}</h5>
        <h2>{noOfTransaction}</h2>
      </div>
    </div>
  );
};

export default AmountAndTransaction;
