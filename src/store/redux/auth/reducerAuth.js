import {
  SET_CURRENT_USER,
  LOGIN,
  AUTH_ERRORS,
  AUTH_LOADING,
  LOGOUT,
  OTP_SENT,
  OTP_VERIFIED,
  OTP_VERIFICATION_FAILED,
  OTP_SENT_FAILED,
  REGISTER_USER,
} from "../type";
import isEmpty from "../../validation/isEmpty";

const Initial_State = {
  isAuthenticated: false,
  user: {},
  token: null,
  loading: false,
  successful: null,
  errors: {},
};

export default (state = Initial_State, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
        errors: {},
      };
    case LOGIN:
      return {
        ...state,
        loading: false,
        errors: {},
      };
    case AUTH_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case SET_CURRENT_USER:
      // ;
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload.decoded),
        user: action.payload.decoded,
        token: action.payload.token,
      };
    case OTP_SENT:
      return {
        ...state,
        loading: false,
        successful: true,
        errors: {},
      };

    case REGISTER_USER:
      return {
        ...state,
        loading: false,
        errors: {},
        successful: true,
      };

    case OTP_SENT_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case OTP_VERIFIED:
      return {
        ...state,
        loading: false,
        successful: true,
      };
    case OTP_VERIFICATION_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        errors: {},
        isAuthenticated: false,
        user: {},
        token: null,
        loading: false,
      };
    default:
      // ;
      return state;
  }
};
