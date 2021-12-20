import React from "react";
import { Component } from "react";
import CategoryNav from "./CategoryNav";
import MainCategory from "./MainCategory";
import Category3 from "../../../assets/images/category1.png";
import Category2 from "../../../assets/images/category2.png";
import Category4 from "../../../assets/images/category3.png";
import Category1 from "../../../assets/images/category4.png";
import { Table } from "reactstrap";
import SingleProduct from "../SingleProduct";
import Burger from "../../../assets/images/burger.svg";
import "./Category.css";

class Category extends Component {
  render() {
    return (
      <>
        <div className="page-content transaction-page">
          <CategoryNav />

          <div className="category-page mt-4">
            <div className="">
              <div className="add-products d-flex justify-content-between">
                <div className="add-product-form d-flex">
                  <div>
                    <input type="text" placeholder="Search Item" />
                  </div>
                  <div className="d-flex select-div">
                    <select name="" id="">
                      <option>Add New Category</option>
                      <option value="">Medicine</option>
                      <option value="">Suppliments</option>
                      <option value="">Medical Equipments</option>
                    </select>
                  </div>
                  {/* <div className="add-filter ml-5">+ Add Filter</div> */}
                </div>
              </div>
            </div>
            <div className="category-products d-flex">
              <MainCategory img={Category1} name="Medicine" qty="12,567" />
              <MainCategory img={Category2} name="Personal Care" qty="12,567" />
              <MainCategory img={Category3} name="Suppliments" qty="3,500" />
              <MainCategory img={Category4} name="Equipments" qty="6,750" />
            </div>
            <div className="product-stock">
              <Table
                style={{ background: "#1C1C1E" }}
                className="text-center"
                
              >
                <thead>
                  <tr className="text-center">
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
                  <SingleProduct
                    img={Burger}
                    name="Nivea Body milk Lotion"
                    qty="150ml"
                    category="Personal Care"
                    price="$21.00"
                    stock="100"
                  />
                  <SingleProduct
                    img={Burger}
                    name="Nivea Body milk Lotion"
                    qty="150ml"
                    category="Personal Care"
                    price="$21.00"
                    stock="200"
                  />
                  <SingleProduct
                    img={Burger}
                    name="Nivea Body milk Lotion"
                    qty="150ml"
                    category="Personal Care"
                    price="$21.00"
                    stock="15"
                  />

                  <SingleProduct
                    img={Burger}
                    name="Nivea Body milk Lotion"
                    qty="150ml"
                    category="Personal Care"
                    price="$21.00"
                    stock="140"
                  />
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Category;
