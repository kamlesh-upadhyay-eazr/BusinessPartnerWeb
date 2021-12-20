import React from "react";
import { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  addProduct,
  getProductCategoty,
} from "../../store/redux/products/actionProduct";

class AddProducts extends Component {
  constructor(props) {
    super(props);
    console.log("props", this.props);
    this.state = {
      file:
        "https://i.pinimg./236x/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.jpg",
      gfile: null,
      name: "",
      description: "",
      category: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangegimg = this.handleChangegimg.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }
  handleChangegimg(event) {
    this.setState({
      gfile: URL.createObjectURL(event.target.files[0]),
    });
  }

  // saveData = () => {
  //   return (
  //     this.state.name,
  //     this.state.description,
  //     this.state.file,
  //     this.state.category,
  //     this.state.gfile
  //   );
  // };

  componentDidMount() {
    this.props.getProductCategoty();
  }

  render() {
    // console.log(this.state.name);
    // console.log(this.state.description);
    console.log(this.state.file);
    // console.log(this.state.gfile);
    console.log("radio", this.state.category);

    return (
      <div className="page-content edit-product-page">
        <Container>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb" style={{ background: "none" }}>
              <li className="breadcrumb-item">
                <Link to="/my-products" style={{ color: "#3A44A1" }}>
                  <i
                    class="fas fa-arrow-left mr-3"
                    style={{ color: "#7062e0" }}
                  ></i>
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
          <div className="edit-content">
            <div className="big-form-div">
              <div className="left-big-form mr-5">
                <div
                  style={{ background: "#000000", color: "#9fc3d4" }}
                  className="p-2 font-size-18"
                >
                  Product Details
                </div>
                <div className="left-form">
                  <div className="d-flex justify-content-around mb-3">
                    <label htmlFor="" style={{ width: "35%" }}>
                      Product Name
                    </label>
                    <input
                      type="text"
                      style={{ width: "100%" }}
                      placeholder="Enter Item Name"
                      onChange={(e) =>
                        this.setState({
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="d-flex justify-content-around mb-3">
                    <label htmlFor="" style={{ width: "35%" }}>
                      Cost
                    </label>
                    <input
                      type="text"
                      style={{ width: "100%" }}
                      placeholder="Enter Item Cost"
                    />
                  </div>
                  <div className="d-flex justify-content-around mb-3">
                    <label htmlFor="" style={{ width: "35%" }}>
                      Quantity
                    </label>
                    <input
                      type="text"
                      style={{ width: "100%" }}
                      placeholder="Enter Item Qty"
                    />
                  </div>
                  <div className="d-flex justify-content-around mb-3">
                    <label htmlFor="" style={{ width: "35%" }}>
                      Discount
                    </label>
                    <input
                      type="text"
                      style={{ width: "100%" }}
                      placeholder="Enter Item Discount"
                    />
                  </div>
                  <div className="d-flex">
                    <label htmlFor="" style={{ width: "35%" }}>
                      Description
                    </label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      style={{ width: "100%" }}
                      placeholder="Description"
                      onChange={(e) =>
                        this.setState({ description: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="right-big-form">
                <div
                  style={{ background: "#000000", color: "#9fc3d4" }}
                  className="p-2 font-size-18"
                >
                  Images
                </div>
                <div className="left-form">
                  {/* <div
                    className="mb-3 align-items-center"
                    style={{ height: "20%" }}
                  >
                    <label
                      htmlFor=""
                      style={{
                        height: "100%",
                      }}
                      className="mr-2"
                    >
                      Status 
                    </label>
                    <select name="" id="" className="select-publish">
                      <option>Publish</option>
                      <option value="">Publish</option>
                      <option value="">Publish</option>
                      <option value="">Publish</option>
                    </select>
                  </div> */}
                  <div className="d-flex open-folder-btn">
                    <div className="w-50">
                      <label htmlFor="">Featured Image</label>
                      <label for="files" class="btn btn-default browse-img">
                        Browse Image
                      </label>
                      <input
                        id="files"
                        type="file"
                        class="btn btn-default"
                        style={{ visibility: "hidden" }}
                      />
                    </div>
                    <div className="w-50">
                      <label htmlFor="">Gallery Image</label>
                      <label for="gallery" class="btn btn-default browse-img">
                        Browse Image
                      </label>
                      <input
                        id="gallery"
                        type="file"
                        class="btn btn-default"
                        style={{ visibility: "hidden" }}
                      />
                    </div>
                  </div>
                </div>

                {/* {console.log("edit", this.props.products)} */}
                {/* {this.props.category
                  ? this.props.category.map((item) => {
                      // console.log("item", item);
                      return (
                        <div className="category-checkbox">
                          <div className="edit-check">
                            <input
                              type="checkbox"
                              value={item._id}
                              onChange={(e) =>
                                this.setState({ category: e.target.value })
                              }
                            />
                            <label htmlFor="checkbox">{item.name}</label>
                          </div>
                        </div>
                      );
                    })
                  : "loading....."} */}
              </div>

              {/* <div className="add-on ">
                <div
                  className="d-flex justify-content-between p-2 "
                  style={{ background: "#0a0a0a", height: "30%" }}
                >
                  <div className="font-size-18" style={{ color: "#9fc3d4" }}>
                    AddOn
                  </div>
                  <div style={{ color: "#DF8F60" }}>
                    <input type="checkbox" className="mr-2" />
                    Required
                  </div>
                </div>
                <div className="category-checkbox">
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">Lorem Ipsum</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">Lorem Ipsum</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">Lorem Ipsum</label>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="small-form-div">
              <div
                className="product-category"
                style={{ background: "#2C2C2E" }}
              >
                <div className="select-category">
                  <div
                    style={{ background: "#000000", color: "#9fc3d4" }}
                    className="p-2 font-size-18"
                  >
                    Product Category
                  </div>
                  {/* <select name="" id="">
                    <option>Product Category</option>
                    <option value="">Product Category</option>
                    <option value="">Product Category</option>
                    <option value="">Product Category</option>
                    <option value="">Product Category</option>
                  </select> */}
                </div>
                {/* <div className="category-checkbox">
                  <div className="edit-check">
                    <input type="checkbox" />
                    <label htmlFor="checkbox">Personal Care</label>
                  </div>
                  <div className="edit-check">
                    <input type="checkbox" />
                    <label htmlFor="checkbox">Medicine</label>
                  </div>
                  <div className="edit-check">
                    <input type="checkbox" />
                    <label htmlFor="checkbox">Suppliments</label>
                  </div>
                </div> */}
                <div className="category-checkbox">
                  <div className="edit-check">
                    <input type="radio" name="category" />
                    <label htmlFor="checkbox">Personal Care</label>
                  </div>
                  <div className="edit-check">
                    <input type="radio" name="category" />
                    <label htmlFor="checkbox">Medicine</label>
                  </div>
                  <div className="edit-check">
                    <input type="radio" name="category" />
                    <label htmlFor="checkbox">Suppliments</label>
                  </div>
                </div>
              </div>
              {/* <div className="add-on ">
                <div
                  className="d-flex justify-content-between p-2 "
                  style={{ background: "#0a0a0a", height: "30%" }}
                >
                  <div className="font-size-18" style={{ color: "#9fc3d4" }}>
                    AddOn
                  </div>
                  <div style={{ color: "#DF8F60" }}>
                    <input type="checkbox" className="mr-2" />
                    Required
                  </div>
                </div>
                <div className="category-checkbox">
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">Lorem Ipsum</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">Lorem Ipsum</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">Lorem Ipsum</label>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="small-form-div">
              {/* <div
                className="product-category last-form"
                style={{ background: "#2C2C2E" }}
              >
                <div className="select-category">
                  <select name="" id="">
                    <option>Other Details</option>
                    <option value="">Other Details</option>
                    <option value="">Other Details</option>
                    <option value="">Other Details</option>
                  </select>
                </div>
                <div className="category-checkbox">
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">Lorem Ipsum</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">Lorem Ipsum</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">Lorem Ipsum</label>
                  </div>
                </div>
              </div> */}
              <div
                className="save-btn d-flex justify-content-center align-items-center"
                // style={{ width: "50%" }}
              >
                {/* <Link to="/my-products"> */}
                <button
                  onClick={() =>
                    this.props.addProduct(
                      this.state.name,
                      this.state.description,
                      this.state.file,
                      this.state.category,
                      this.state.gfile
                    )
                  }
                >
                  Save
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  const { category } = state.Product;
  return { category };
};

export default connect(mapStatetoProps, { addProduct, getProductCategoty })(
  AddProducts
);
