import React from "react";

import { Link } from "react-router-dom";
const ProductDetails = (props) => {
  return (
    <>
      <div className="view-product w-100" style={{ background: "#1C1C1E" }}>
        <div className="product-img">
          <img src={props.productImg} alt="" srcset="" />
          {/* <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={props.productImg} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={props.productImg} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={props.productImg} class="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <ol class="carousel-indicators">
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
            ></li>
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
            ></li>
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
            ></li>
          </ol> */}
        </div>

        <div className="product-details px-3">
          <div className="d-flex justify-content-between">
            <h5>Product Description</h5>
            <Link to="/edit-product" style={{ color: "#7062e0" }}>
              Edit
            </Link>
          </div>
          <hr />
          <div>
            <h6>Product Name : {props.name} </h6>
          </div>
          <hr />
          <div
            className=" d-flex justify-content-between"
            style={{ width: "30%" }}
          >
            <h6>QTY : {props.qty}</h6>
            <h6>Price : {props.price}</h6>
          </div>
          <hr />
          <div>
            <p>{props.desc}</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Product Specification</h5>
            <Link to="/edit-product" style={{ color: "#7062e0" }}>
              Edit
            </Link>
          </div>
          <hr />
          <div className="view-btn float-right mt-5">
            <button>View More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
