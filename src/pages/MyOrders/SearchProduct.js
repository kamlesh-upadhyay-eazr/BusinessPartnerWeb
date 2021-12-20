import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderTransactions } from "../../store/redux/order/actionOrder";

const SearchProduct = (props) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  // const [input, setInput] = useState("");
  // const [countryListDefault, setCountryListDefault] = useState();
  // const [countryList, setCountryList] = useState();
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.Order.orderTransactions);

  // const updateInput = async (input) => {
  //   const filtered = countryListDefault.filter((country) => {
  //     return country.name.toLowerCase().includes(input.toLowerCase());
  //   });
  //   setInput(input);
  //   setCountryList(filtered);
  // };
  useEffect(() => {
    dispatch(fetchOrderTransactions());

    // const results = orders
    //   ? orders.filter((Order) => Order.toLowerCase().includes(searchTerm))
    //   : "wating..";
    // console.log("result", results);
    // setSearchResults(results);
    // console.log("filteredid", orders);
  }, []);

  return (
    <div className="add-products  d-flex mb-5 ">
      <div className="add-product-form d-flex">
        <div>
          <input
            type="text"
            placeholder="Search Item"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        {/* {orders ? orders.map((item) => console.log(item._id)) : "nooooooooo"} */}
        <div>
          <select name="" id="">
            <option>Filter</option>
            <option value="">Medicine</option>
            <option value="">Suppliments</option>
            <option value="">Medical Equipments</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
