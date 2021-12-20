import {
  GENERATE_REPORTS,
  GENERATE_REPORTS_SUCCESS,
  GENERATE_REPORTS_FAILED,
  FETCH_REPORTS,
  FETCH_REPORTS_FAILED,
} from "../type";
import axios from "axios";
import { ip } from "../../../config/config";
// import { ip } from "../config/config";
// import {
//   generateReport,
//   generateOrderReport,
//   generateProductReport,
//   generateTransactionReport,
//   generateSettlementReport,
// } from "../utils/generateReports";
// import { ToastAndroid } from "react-native";
// import RNFS from "react-native-fs";
// import fetchReports from "../utils/fetchReports";

// /business/business/reports
// import { generateReport } from "../../../utils/generateReports";

export const generateReports = (report, status, duration) => {
  console.log("report", report);
  console.log("status", status);
  // console.log("duration", duration);
  // ;

  return (dispatch) => {
    dispatch(setReportLoading());

    // if (!duration) {
    //   duration = [];
    //   duration.push("2020-12-23T09:56:28.861+00:00");
    //   duration.push(Date.now());
    // }

    axios
      .get(`${ip}/business/reports/getreports`, {
        params: {
          report,
          status,
          // startDate: duration[0],
          // endDate: duration[1],
        },
      })

      .then(async (res) => {
        console.log("res", res);
        // await generateReport(res.data, report);
        // dispatch({
        //   type: GENERATE_REPORTS_SUCCESS,
        // });
        //        dispatch(fetchReps());
        // navigation.navigate("Reports");
        // ToastAndroid.show("Report Generated!", ToastAndroid.LONG);
      })
      .catch((err) => {
        dispatch({
          type: GENERATE_REPORTS_FAILED,
          payload: err,
        });
      });
  };
};

// export const fetchReps = () => {export const fetchReps = () => {export const fetchReps = () => {export const fetchReps = () => {export const fetchReps = () => {export const fetchReps = () => {export const fetchReps = () => {export const fetchReps = () => {export const fetchReps = () => {export const fetchReps = () => {export const fetchReps = () => {export const fetchReps = () => {export const fetchReps = () => {export const fetchReps = () => {
//   return async (dispatch) => {
//     const result = await fetchReports();

//     if ("err" in result) {
//       dispatch({
//         type: FETCH_REPORTS_FAILED,
//         payload: result.err,
//       });
//     } else {
//       dispatch({
//         type: FETCH_REPORTS,
//         payload: result.reports,
//       });
//     }
//   };
// };

const setReportLoading = () => {
  return {
    type: GENERATE_REPORTS,
  };
};
