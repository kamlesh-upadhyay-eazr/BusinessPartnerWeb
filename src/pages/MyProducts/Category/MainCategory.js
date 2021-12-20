import React from "react";

const MainCategory = (props) => {
  return (
    <>
      <div className="main-products">
        <div className="main-product-img">
          <img src={props.img} alt="" />
        </div>

        <div className="main-product-details text-center">
          <h6>{props.name}</h6>
          <p>{props.qty}</p>
        </div>
      </div>
    </>
  );
};

export default MainCategory;
