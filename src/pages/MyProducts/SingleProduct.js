import React from "react";
import { Component } from "react";
import { FormControlLabel, Switch } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { changeProductStatus } from "../../store/redux/products/actionProduct";
import { Button } from "bootstrap";

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    //console.log("sigle props", this.props);
    this.state = {
      //true
      isChecked: this.props.active,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({
      //false
      isChecked: !this.state.isChecked,
    });
    //submit data in db
    // console.log("initial ", this.state.isChecked);
    this.props.changeProductStatus(this.props.id, this.state.isChecked);
  }

  render() {
    // console.log("final ", this.props);
    return (
      <>
        <tr style={{ color: this.state.isChecked && "#ffffff" }}>
          <td className="img">
            <Link to="/view-product">
              <img src={this.props.img} alt="Data is loading..." />
            </Link>
          </td>
          <td>
            <Link to="/view-product">
              <i
                class="fas fa-circle font-size-10 mx-3"
                style={{ color: "#03AA3D" }}
              ></i>
            </Link>
            <Link
              to="/view-product"
              style={{
                textDecoration: "none",
                color: this.state.isChecked ? "#ffffff" : "#798598",
              }}
            >
              {this.props.name}
            </Link>
          </td>
          <td>
            <Link
              to="/view-product"
              style={{
                textDecoration: "none",
                color: this.state.isChecked ? "#ffffff" : "#798598",
              }}
            >
              {this.props.qty}
            </Link>
          </td>
          <td>
            <Link
              to="/view-product"
              style={{
                textDecoration: "none",
                color: this.state.isChecked ? "#ffffff" : "#798598",
              }}
            >
              {this.props.category}
            </Link>
          </td>
          <td>
            <Link
              to="/view-product"
              style={{
                textDecoration: "none",
                color: this.state.isChecked ? "#ffffff" : "#798598",
              }}
            >
              {this.props.price}
            </Link>
          </td>
          <td>
            <Link
              to="/view-product"
              style={{
                textDecoration: "none",
                color: this.state.isChecked ? "#ffffff" : "#798598",
              }}
            >
              <p style={{ margin: "0" }}>7/1/2020</p>
              <span>9:20 Pm</span>
            </Link>
          </td>
          <td>
            <Link
              to="/view-product"
              style={{
                textDecoration: "none",
                color: this.state.isChecked ? "#ffffff" : "#798598",
              }}
            >
              {this.props.stock}
            </Link>
          </td>

          <td>
            <FormControlLabel
              control={
                <Switch
                  // checked={color === blue}

                  onChange={this.handleChange}
                  // value="dynamic-class-name"
                  checked={this.state.isChecked}
                  color="none"
                  style={{
                    color: this.state.isChecked ? "green" : "#DD5C64",
                  }}
                />
              }
            />
          </td>

          <td>
            <i class="fas fa-pencil-alt" style={{ color: "#2C2C2E" }}></i>
            <Link
              to={`/edit-product/${this.props.id}`}
              // id={this.props.params}
              // params={this.props.name}
              // onClick={() => this.props.id}
              //   props={this.props}
              style={{ textDecoration: "none", color: "#7062e0" }}
            >
              Edit
            </Link>
          </td>
        </tr>
      </>
    );
  }
}

const mapStatetoProps = (state) => {
  const { products } = state.Product;
  return { products };
};

export default withRouter(
  connect(mapStatetoProps, { changeProductStatus })(SingleProduct)
);
