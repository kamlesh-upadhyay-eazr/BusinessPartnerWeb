import {
  SETTLEMENT_LOADING,
  FETCH_SETTLEMENT_TRANSACTIONS,
  FETCH_SETTLEMENT_TRANSACTIONS_FAILED,
  FETCH_BANK_DETAILS,
  ADD_BANK_DETAILS,
  ADD_BANK_DETAILS_FAILED,
  CHANGE_DEFAULT_BANK,
  CHANGE_DEFAULT_BANK_FAILED,
} from "../type";
import axios from "axios";
import { ip } from "../../../config/config";
import moment from "moment";

export const fetchSettlements = (start, end, searched) => {
  return (dispatch) => {
    dispatch(setSettlementLoading);

    start = start ? start : "";
    end = end ? end : "";
    searched = searched ? searched : "";

    axios
      .get(`${ip}/business/settlements`, {
        params: { start, end, searched: "", page: 1, limit: 10000 },
      })
      .then((res) => {
        console.log("res", res.data);
        dispatch({
          type: FETCH_SETTLEMENT_TRANSACTIONS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
        dispatch({
          type: FETCH_SETTLEMENT_TRANSACTIONS_FAILED,
          payload: err,
          // fetchSettlements != undefined && fetchSettlements.length != 0
          //   ? err.response.data
          //   : null,
        });
      });
  };
};

//fetching bank details
export const fetchingBankDetails = (start, end, searched) => {
  return (dispatch) => {
    axios
      .get(`${ip}/business/settlementsettings/fetchbankdetails`, {
        params: { start, end, searched: "", page: 1, limit: 10000 },
      })
      .then((res) => {
        debugger;
        console.log("res", res.data);

        dispatch({
          type: FETCH_BANK_DETAILS,
          payload: res.data,
        });
      })

      .catch((err) => {
        debugger;
        console.log("err", err);
        dispatch({
          type: FETCH_SETTLEMENT_TRANSACTIONS_FAILED,
          payload: err,
        });
      });
  };
};


//ADD bank details
export const addBankDetail = (
  bankName,
  branchName,
  accountNumber,
  ifscCode
) => {

  console.log("name", bankName);
  return (dispatch) => {
    axios
      .post(`${ip}/business/settlementsettings/addupdatebankdetails`, {
        bankName,
        branchName,
        accountNumber,
        ifscCode,
      })
      .then((res) => {
        console.log("res", res.data);

        dispatch({
          type: ADD_BANK_DETAILS,
          payload: res.data,
        });
      })

      .catch((err) => {
        console.log("err", err);
        dispatch({
          type: ADD_BANK_DETAILS_FAILED,
          payload: err,
        });
      });
  };
};

export const changedefaultbank = (index) => {
  console.log("index", index);
  return (dispatch) => {
    axios
      .put(`${ip}/business/settlementsettings/changedefaultbank`, {
        PrimaryNo: index,
      })
      .then((res) => {
        console.log("reschngedefaua", res.data);

        dispatch({
          type: CHANGE_DEFAULT_BANK,
          payload: res.data,
        });
      })

      .catch((err) => {
        console.log("err", err);
        dispatch({
          type: CHANGE_DEFAULT_BANK_FAILED,
          payload: err,
        });
      });
  };
};
const setSettlementLoading = () => {
  return {
    type: SETTLEMENT_LOADING,
  };
};
