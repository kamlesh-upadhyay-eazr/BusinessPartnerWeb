import {
  PRODUCT_LOADING,
  ADD_PRODUCT,
  ADD_PRODUCT_FAILED,
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTCATEGORY,
  GET_PRODUCTCATEGORY_FAILED,
  GET_PRODUCTS_BY_ID,
  PRODUCTS_BY_ID_FAILED,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_FAILED,
} from "../type";
// import { ip } from "../config/config";
import axios from "axios";
import { ip } from "../../../config/config";

export const getProducts = (pageNo) => {
  return (dispatch) => {
    // console.log(localStorage.getItem("Authorization"));
    dispatch(setProductLoading());

    axios
      .get(`${ip}/business/product/`, {
        params: { pageNo },
      })
      .then((res) => {
        console.log("res", res.data);

        dispatch({
          type: GET_PRODUCTS,
          payload: res.data,
        });
      })

      .catch((err) => {
        console.log("err", err);
        dispatch({
          type: GET_PRODUCTS_FAILED,
          payload: err,
        });
      });
  };
};

// get prodocts category

export const getProductCategoty = () => {
  return (dispatch) => {
    // console.log(localStorage.getItem("Authorization"));
    dispatch(setProductLoading());

    axios
      .get(`${ip}/business/product/productcategory`)
      .then((res) => {
        console.log("res", res.data);
        dispatch({
          type: GET_PRODUCTCATEGORY,
          payload: res.data,
        });
      })

      .catch((err) => {
        console.log("err", err);
        dispatch({
          type: GET_PRODUCTCATEGORY_FAILED,
          payload: err,
        });
      });
  };
};

export const addProduct = (
  name,
  description,
  featuredimage,
  category
  // gallaryimage
) => {
  // console.log(name);
  // console.log(description);
  // console.log(featuredimage);
  // console.log(category);
  //console.log(gallaryimage);

  // console.log("product", product);
  return (dispatch) => {
    dispatch(setProductLoading());

    axios
      .post(`${ip}/business/product/addproduct`, {
        name,
        description,
        featuredimage,
        category,
        //        gallaryimage,
      })
      .then((res) => {
        console.log("respo", res);
        dispatch({
          type: ADD_PRODUCT,
        });
      })
      .catch((err) => {
        console.log("err", err);
        dispatch({
          type: ADD_PRODUCT_FAILED,
          payload: err.response.data,
        });
      });
  };
};

export const changeProductStatus = (id, status) => {
  console.log("status", status);
  console.log("id", id);
  return (dispatch) => {
    axios
      .patch(`${ip}/business/product/updateactive`, {
        productId: id,
        active: status,
      })
      .then((res) => {
        console.log("Status Updated!", res);
        // ToastAndroid.show("Status Updated!");
      })
      .catch((err) => {
        // ToastAndroid.show("Something went wrong!");
        console.log("Status Updated!");
      });
  };
};

export const setProductLoading = () => {
  return {
    type: PRODUCT_LOADING,
  };
};

const setAuthToken = (token) => {
  if (token) {
    //Apply to every request
    axios.defaults.headers.common["Authorization"] = token;
    localStorage.setItem("token", token);
    // localStorage.setItem("authUser", token);
  } else {
    //Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

//get product by id
export const getProductById = (id) => {
  console.log(" action", id);
  return (dispatch) => {
    // console.log(localStorage.getItem("Authorization"));
    dispatch(setProductLoading());

    axios
      .get(`${ip}/business/product/${id}`)
      .then((res) => {
        console.log("res", res.data);

        dispatch({
          type: GET_PRODUCTS_BY_ID,
          payload: res.data,
        });
      })

      .catch((err) => {
        console.log("err", err);
        dispatch({
          type: PRODUCTS_BY_ID_FAILED,
          payload: err,
        });
      });
  };
};
//update products/ edit products
export const editProdcut = (
  name,
  description,
  featuredimage,
  category
  // gallaryimage
) => {
  console.log(name);
  // console.log(description);
  // console.log(featuredimage);
  // console.log(category);
  //console.log(gallaryimage);

  // console.log("product", product);
  return (dispatch) => {
    dispatch(setProductLoading());

    axios
      .patch(`${ip}/business/product/editproduct`, {
        name,
        description,
        featuredimage,
        category,
        //        gallaryimage,
      })
      .then((res) => {
        console.log("respo", res);
        dispatch({
          type: UPDATE_PRODUCT,
        });
      })
      .catch((err) => {
        console.log("err", err);
        dispatch({
          type: UPDATE_PRODUCT_FAILED,
          payload: err.response.data,
        });
      });
  };
};
