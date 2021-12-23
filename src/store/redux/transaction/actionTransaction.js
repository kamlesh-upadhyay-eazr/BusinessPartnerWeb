import {
  ORDER_TRANSACTIONS,
  ORDER_TRANSACTIONS_LOADINNG,
  ORDER_TRANSACTIONS_STATUS,
  ORDER_TRANSACTIONS_FAILD,
  FETCH_SINGLE_TRANSACTIONS,
  FETCH_SINGLE_TRANSACTIONS_FAILED,
  ORDER_TRANSACTIONS_CHANGE_STATUS,
  CHANGE_ORDER_TRANSACTSTATUS_FAILED,
  TOTAL_SUM,
  TOTAL_TRANSACTIONS_SUM,
  TOTAL_COMPLETED_TRANSACTIONS,
  FETCH_COMPLETED_TRANSACTIONS,
  FETCH_COMPLETED_TRANSACTIONS_FAILED,
  FETCH_FAILED_TRANSACTIONS,
  FETCH_FAILED_TRANSACTIONS_FAILED,
  FETCH_REFUNDED_TRANSACTIONS,
} from "../type";
import axios from "axios";
import { ip } from "../../../config/config";

export const fetchOrderTransactions = (start, end, searched) => {
  return (dispatch) => {
    dispatch(setTransactiosLoading());
    axios
      .get(`${ip}/business/transaction`, {
        params: {
          start,
          end,
          searched,
        },
      })
      .then((res) => {
        // ;
        console.log("transaction", res.data.transactions);
        var sum = 0;
        res.data.transactions.forEach((transaction) => {
          sum += parseFloat(transaction.amount);
        });
        var data = {
          transactions: res.data.transactions,
          totalSum: sum,
          totalTransactionsSum: sum,
        };

        dispatch({
          type: ORDER_TRANSACTIONS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ORDER_TRANSACTIONS_FAILD,
          // payload: err.response.data,
          payload:
            // fetchOrderTransactions != undefined &&
            fetchOrderTransactions.length != 0 ? err.response.data : null,
        });
      });
  };
};

export const fetchFailedTransaction = () => {
  return (dispatch) => {
    dispatch(setTransactiosLoading());

    axios
      .get(`${ip}/business/transaction/failed`, {
        // params: {
        //   id,
        // },
      })
      .then((res) => {
        console.log("transaction", res.data.failedTransactions);
        var sum = 0;
        res.data.transactions.forEach((transaction) => {
          sum += parseFloat(transaction.amount);
        });
        var data = {
          transactions: res.data.transactions,
          totalFailedSum: sum,
        };
        dispatch({
          type: FETCH_FAILED_TRANSACTIONS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_FAILED_TRANSACTIONS_FAILED,
          payload: err.response.data,
        });
      });
  };
};

// export const fetch

export const fetchCompletedTransaction = () => {
  return (dispatch) => {
    dispatch(setTransactiosLoading());

    axios
      .get(`${ip}/business/transaction/completed`, {
        // params: {
        //   id,
        // },
      })
      .then((res) => {
        console.log("transaction", res.data.completedTransactions);
        var sum = 0;
        res.data.transactions.forEach((transaction) => {
          sum += parseFloat(transaction.amount);
        });
        var sums = 0;
        res.data.transactions.forEach((transaction) => {
          sums += parseFloat(transaction.amount);
        })
        var data = {
          transactions: res.data.transactions,
          totalCompletedSum: sum,
          totalTransactionsSum: sums,
        };
        dispatch({
          type: FETCH_COMPLETED_TRANSACTIONS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_COMPLETED_TRANSACTIONS_FAILED,
          payload: err.response.data,
        });
      });
  };
};

// export const fetchRefundedTransaction = (id) => {
//   return (dispatch) => {
//     dispatch(setTransactiosLoading());

//     axios
//       .get(`${ip}/business/transaction/refunded`, {
//         params: {
//           id,
//         },
//       })
//       .then((res) => {

//         dispatch({
//           type: FETCH_REFUNDED_TRANSACTIONS,
//           payload: res.data,
//         });
//       })
//       .catch((err) => {

//         dispatch({
//           type: FETCH_TRANSACTIONS_FAILED,
//           payload: err.response.data,
//         });
//       });
//   };
// };

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
          type: FETCH_SINGLE_TRANSACTIONS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_SINGLE_TRANSACTIONS_FAILED,
          payload: err.response.data,
        });
      });
  };
};

// export const fetchFailedOrder = (id) => {
//   return (dispatch) => {
//     dispatch(setTransactiosLoading());

//     axios
//       .get(`${ip}/business/transaction/failed`, {
//         // params: {
//         //   id,
//         // },
//       })
//       .then((res) => {
//         dispatch({
//           type: FETCH_FAILED_TRANSACTIONS,
//           payload: res.data,
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           // type: FETCH_TRANSACTIONS_FAILED,
//           // payload: err.response.data,
//         });
//       });
//   };
// };

export const fetchCompletedOrder = (id) => {
  return (dispatch) => {
    dispatch(setTransactiosLoading());

    axios
      .get(`${ip}/business/transaction/completed`, {
        params: {
          id,
        },
      })
      .then((res) => {
        dispatch({
          type: FETCH_COMPLETED_TRANSACTIONS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          // type: FETCH_TRANSACTIONS_FAILED,
          payload: err.response.data,
        });
      });
  };
};

export const changeOrderStatus = (orderid, status, navigation, path) => {
  return (dispatch) => {
    dispatch(setTransactiosLoading());

    axios
      .post(`${ip}/business/order/chanageorderstatus`, { orderid, status })
      .then((res) => {
        dispatch({
          type: ORDER_TRANSACTIONS_CHANGE_STATUS,
          payload: res.data,
        });
        // ToastAndroid.show("Order Status Changed", ToastAndroid.LONG);
        // if (navigation) {
        // navigation.navigate(path);
        // }
      })
      .catch((err) => {
        dispatch({
          type: CHANGE_ORDER_TRANSACTSTATUS_FAILED,
          payload: err,
        });
      });
  };
};

const setTransactiosLoading = () => {
  return {
    type: ORDER_TRANSACTIONS_LOADINNG,
  };
};
