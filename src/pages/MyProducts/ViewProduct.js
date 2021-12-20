import React from "react";
import { Component } from "react";
import Container from "reactstrap/lib/Container";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductImg from "../../assets/images/productImg.png";
class ViewProduct extends Component {
  render() {
    return (
      <div className="page-content view-product-page ">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb" style={{ background: "none" }}>
            <li className="breadcrumb-item">
              <Link to="/my-products" style={{ color: "#3A44A1" }}>
                <i
                  class="fas fa-arrow-left mr-3"
                  style={{ color: "#7062e0" }}
                ></i>{" "}
                Add New Product
              </Link>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{ color: "#ffffff" }}
            >
              Product
            </li>
          </ol>
        </nav>
        <ProductDetails
          productImg={ProductImg}
          name="Medicine XYZ"
          qty="150ml"
          price="200"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <Container></Container>
      </div>
    );
  }
}

export default ViewProduct;
