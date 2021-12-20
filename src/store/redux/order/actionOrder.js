import {
  ORDER_LOADING,
  FETCH_ORDER,
  FETCH_ORDER_FAILED,
  CHANGE_ORDER_STATUS,
  CHANGE_ORDER_STATUS_FAILED,
  FETCH_SINGLE_ORDER,
  FETCH_SINGLE_ORDER_FAILED,
} from "../type";
import axios from "axios";
import { ip } from "../../../config/config";

export const fetchOrderTransactions = () => {
  console.log("working....");
  return (dispatch) => {
    dispatch(setTransactiosLoading());
    axios
      .get(`${ip}/business/transaction/transactions`)
      // .get(`${ip}/business/transaction/all`)

      .then((res) => {
        console.log("res", res.data);
        // ;;
        dispatch({
          type: FETCH_ORDER,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("errr", err);
        // ;
        dispatch({
          type: FETCH_ORDER_FAILED,
          payload: err,
        });
      });
  };
};

export const fetchSingleOrder = (id) => {
  return (dispatch) => {
    dispatch(setTransactiosLoading());

    axios
      .get(`${ip}/business/order/getorderbyid`, {
        params: {
          id,
        },
      })
      .then((res) => {
        dispatch({
          type: FETCH_SINGLE_ORDER,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_SINGLE_ORDER_FAILED,
          payload: err.response.data,
        });
      });
  };
};

export const changeOrderStatus = (orderid, status) => {
  console.log("orderid", orderid);
  console.log("orderstatus", status);

  return (dispatch) => {
    dispatch(setTransactiosLoading());

    axios
      .post(`${ip}/business/order/chanageorderstatus`, {
        orderid,
        status,
      })
      .then((res) => {
        console.log("res", res);
        dispatch({
          type: CHANGE_ORDER_STATUS,
          payload: res.data,
        });
        // ToastAndroid.show("Order Status Changed", ToastAndroid.LONG);
        // if (navigation) {
        //   navigation.navigate(path);
        // }
      })
      .catch((err) => {
        console.log("err", err);
        dispatch({
          type: CHANGE_ORDER_STATUS_FAILED,
          payload: err,
        });
      });
  };
};

const setTransactiosLoading = () => {
  return {
    type: ORDER_LOADING,
  };
};
