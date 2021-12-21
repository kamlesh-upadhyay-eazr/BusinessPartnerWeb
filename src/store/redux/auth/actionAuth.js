import {
  LOGIN,
  AUTH_LOADING,
  AUTH_ERRORS,
  SET_CURRENT_USER,
  OTP_SENT,
  OTP_SENT_FAILED,
  LOGOUT,
  OTP_VERIFIED,
  OTP_VERIFICATION_FAILED,
  REGISTER_USER,
} from "../type";
// import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
// import { ip } from "../config/config";
import axios from "axios";
// import { getProfile } from "../actions/profileActions";
// import { DrawerActions } from "@react-navigation/native";
// import {getPermissions} from '../utils/getPermissions';
// import getDeviceInfo from '../utils/getDeviceInfo';
// import {fetchReps} from './reportActions';
import {} from "react-router-dom";
import { ip } from "../../../config/config";
import { getProfile } from "../profile/actionProfile";

//Login
export const login = (emailorphone, password) => {
  return async (dispatch) => {
    dispatch(setAuthLoading());

    axios
      .post(`${ip}/business/user/login`, {
        emailorphone,
        password,
      })
      .then(async (res) => {
        const { token } = res.data;

        //Set token to auth header
        setAuthToken(token);

        //Decode token to get user data
        const decoded = jwt_decode(token);

        //Set current user
        dispatch(setCurrentUser(decoded, token));
        dispatch({
          type: LOGIN,
        });
        // dispatch(getProfile());

        // navigation.navigate("DrawerNavigation");

        // ToastAndroid.show("Logged in Successfully!", ToastAndroid.LONG);
      })
      .catch((err) => {
        dispatch({
          type: AUTH_ERRORS,
          payload: err.response.data,
        });
      });
  };
};

//signup with email, password and phone number
export const registerUser = (user) => {
  return (dispatch) => {
    dispatch(setAuthLoading());
    console.log("userregister", user);

    axios
      .post(`${ip}/business/user/signup`, user)
      .then((res) => {
        console.log("res", res);
        dispatch({
          type: REGISTER_USER,
        });
      })
      .catch((err) => {
        console.log("err", err.response.data);
        dispatch({
          type: AUTH_ERRORS,
          payload: err.response.data,
        });
      });
  };
};

//Login with otp
export const loginotp = (phone) => {
  return (dispatch) => {
    console.log("userphone", phone);
    dispatch(setAuthLoading());

    axios
      .post(
        `${ip}/business/user/loginotp`,

        phone
      )
      .then((res) => {
        console.log("res", res);
        dispatch({
          type: OTP_SENT,
        });

        // navigation.navigate("OtpVerify", {
        //   phone: phone,
        // });
        // ToastAndroid.show(
        //   "Otp has been sent to your device",
        //   ToastAndroid.LONG
        // );
      })
      .catch((err) => {
        console.log("err", err.response.data);
        dispatch({
          type: AUTH_ERRORS,
          payload: err.response.data,
        });
      });
  };
  // return {
  //     type: CHECK_LOGIN,
  //     payload: { user, history }
  // }
};

//Verify otp
export const verifyOtp = (phone, otp, history) => {
  debugger;
  return (dispatch) => {
    axios
      .post(`${ip}/business/user/verifyotp`, {
        phone,
        otp,
      })
      .then((res) => {
        debugger;
        const { token } = res.data;

        localStorage.setItem("token", token);
        dispatch(setAuthLoading(token));

        //Set token to auth header
        setAuthToken(token);

        // localStorage.setItem("authUser",token);
        //Decode token to get user data
        const decoded = jwt_decode(token);

        //Set current user
        dispatch(setCurrentUser(decoded, token));

        //  dispatch(getProfile());
        dispatch({
          type: OTP_VERIFIED,
        });
        dispatch(getProfile());
        history.push("/dashboard");
      })
      .catch((err) => {
        debugger;
        console.log(err);

        dispatch({
          type: AUTH_ERRORS,
          payload: err.response.data,
        });
      });
  };
};

//Resend otp
export const resendOtp = (phone) => {
  debugger;
  return (dispatch) => {
    dispatch(setAuthLoading());

    axios
      .post(`${ip}/business/user/resendotp`, {
        phone,
      })
      .then((res) => {
        debugger;
        dispatch({
          type: OTP_SENT,
        });
        console.log("response",res);

        // ToastAndroid.show(
        //   "Otp has been resent to your device",
        //   ToastAndroid.LONG
        // );
      })
      .catch((err) => {
        debugger;
        console.log(err);
        dispatch({
          type: AUTH_ERRORS,
          payload:
            resendOtp != undefined && resendOtp.length != 0
              ? err.response.data
              : phone,
        });
      });
  };
};

//Logout user
export const logout = (history) => {
  return (dispatch) => {
    dispatch(setCurrentUser(null, null));

    localStorage.removeItem("token");
    // localStorage.removeItem("authUser");
    // this.props.logoutUser();
    // const { history } = this.props;
    history.push("/login");

    // history.push("/login");
    // navigation.navigate("SignUp");
    // ToastAndroid.show("Logged Out", ToastAndroid.SHORT);
  };
};

export const setAuthLoading = () => {
  return {
    type: AUTH_LOADING,
  };
};

//Set logged in user
export const setCurrentUser = (decoded, token) => {
  //
  return {
    type: SET_CURRENT_USER,
    payload: { decoded, token },
  };
};

export const setAuthToken = (token) => {
  debugger;
  if (token) {
    //Apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    //Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
