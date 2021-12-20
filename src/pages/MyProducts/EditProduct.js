import React from "react";
import { Component } from "react";
import { Container } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import {
  getProductById,
  editProdcut,
} from "../../store/redux/products/actionProduct";
import { connect } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      featuredImage: "",
      galleryImage: "",
      categorybyid: "",
      product: null,
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

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProductById(id);
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.product) {
      return {
        product: nextProps.product,
        name: nextProps.product.name,
        description: nextProps.product.description,
      };
    }
  }

  render() {
    // console.log(
    //   "render",
    //   this.props.product ? this.props.product.name : "loading"
    // );

    // console.log(
    //   "loadind",
    //   this.props.loading ? (
    //     <ClipLoader color="red" loading size={150} />
    //   ) : (
    //     this.props.product
    //   )
    // );
    //  console.log("hello_id", this.props);
    console.log(this.state);
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
                  ></i>{" "}
                  Edit Product
                </Link>
              </li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
                style={{ color: "#ffffff" }}
              >
                edit
              </li>
            </ol>
          </nav>
          {/* {this.props.loading ? "loading " : this.props.product} */}
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
                      {/* {console.log("hel", this.props.product.name)} */}
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
                      value={this.state.name}
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
                      value={
                        this.state.description ? this.state.description : ""
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
              </div>
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
                {/* <Link to="#"> */}
                <button
                  onClick={() =>
                    this.props.editProdcut(
                      this.state.name,
                      this.state.description,
                      this.state.featuredImage
                    )
                  }
                >
                  Update
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
  const { product } = state.Product;
  return { product };
};

export default withRouter(
  connect(mapStatetoProps, { getProductById, editProdcut })(EditProduct)
);

// export default EditProduct;
