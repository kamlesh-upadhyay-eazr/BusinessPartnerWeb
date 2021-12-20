import React from "react";
import { Component } from "react";
import { Container } from "reactstrap";
import MyProductNav from "./MyProductNav";
import "./myProducts.css";
import { Table } from "reactstrap";
import Burger from "../../assets/images/burger.svg";
// import { FormControlLabel, Switch } from "@material-ui/core";
import SingleProduct from "./SingleProduct";
import { Link, withRouter } from "react-router-dom";

// redux
import { getProducts } from "../../store/redux/products/actionProduct";
import { connect } from "react-redux";
import { map } from "leaflet";
import ClipLoader from "react-spinners/ClipLoader";

class MyProducts extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({
      isChecked: !this.state.isChecked,
    });
    console.log(this.state.isChecked);
  }

  componentDidMount() {
    this.props.getProducts(1);
  }

  render() {
    return (
      <>
        <div className="page-content transaction-page my-product-page">
          <Container>
            <MyProductNav />

            <div className="add-products d-flex justify-content-between mt-4">
              <div className="add-product-form d-flex">
                <div className="input-field">
                  <input type="text" placeholder="Search Item" />
                </div>
                <div className="d-flex select-div">
                  <select name="" id="">
                    <option style={{ backgroundColor: "#7062e0" }}>
                      Select Category
                    </option>

                    <option style={{ backgroundColor: "#7062e0" }}>
                      Medicine
                    </option>
                    <option style={{ backgroundColor: "#7062e0" }}>
                      Suppliments
                    </option>
                    <option style={{ backgroundColor: "#7062e0" }}>
                      Medical Equipments
                    </option>
                  </select>
                </div>
                {/* <div className="add-filter ml-5">+ Add Filter</div> */}
              </div>
              <div className="add-btn">
                <Link to="/add-product">
                  <button style={{ backgroundColor: "#7062e0" }}>
                    Add New
                  </button>
                </Link>
              </div>
            </div>
            <div className="add-product-pagination w-100 mt-3">
              <p>Showing 1-2</p>
            </div>
            <div className="product-stock">
              <Table
                style={{ background: "#1C1C1E" }}
                className="text-center"
                // hover
              >
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Date & Time</th>
                    <th>In Stock Available</th>
                    <th>Enable/Disable</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {console.log("prod", this.props.products)} */}
                  {this.props.products ? (
                    this.props.products.map((item) => {
                      // console.log("item", item);
                      return (
                        <SingleProduct
                          // data={this.props.getProducts(1)}
                          img={item.image}
                          name={item.name}
                          qty={item.quantity}
                          category={item.category.name}
                          price={item.cost}
                          stock="200"
                          active={item.active}
                          id={item._id}
                        />
                      );
                    })
                  ) : (
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        height: "30vh",
                        position: "relative",
                        left: "300%",
                      }}
                    >
                      <h6 style={{ textAlign: "center"}}>No data found...</h6>
                      {/* <ClipLoader color="#fff" size="50" /> */}
                    </div>
                    
                    // <h6 style={{ textAlign: "center" }}>No data found...</h6>
                  )}
                </tbody>
              </Table>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

const mapStatetoProps = (state) => {
  const { products } = state.Product;
  return { products };
};

export default withRouter(
  connect(mapStatetoProps, { getProducts })(MyProducts)
);
