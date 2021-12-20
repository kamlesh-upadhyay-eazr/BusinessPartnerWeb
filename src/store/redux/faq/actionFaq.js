import {
     FETCH_FAQ, 
     FETCH_FAQ_FAILED,
     FAQ_LOADING 
    } from "../type"; 
import axios from "axios";
import { ip } from "../../../config/config";

export const fetchFaq = () => {
  console.log("working....");
  return (dispatch) => {
    dispatch(setFaq());

    axios
      .get(`${ip}/business/faq`)
      .then((res) => {
        dispatch({
          type: FETCH_FAQ,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
        dispatch({
          type: FETCH_FAQ_FAILED,
          payload: err,
        });
      });
  };
}; 

const setFaq = () => {
  return {
    type: FAQ_LOADING,
  };
};





//     axios
//   .get(`${ip}/business/faq`)
//   .then((res) => {
//     console.log("res", res.data);

//     dispatch({
//       type: FETCH_FAQ,
//       payload: res.data,
//     });
//   })
//   .catch((err) => {
//     console.error("err", err);
//     dispatch({
//       type: FETCH_FAQ_FAILED,
//       payload: err,
//     });
//   });
