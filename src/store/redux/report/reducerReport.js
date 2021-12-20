import {
  GENERATE_REPORTS,
  GENERATE_REPORTS_FAILED,
  GENERATE_REPORTS_SUCCESS,
  FETCH_REPORTS_FAILED,
  FETCH_REPORTS,
} from "../type";

const Initial_State = {
  reports: null,
  loading: false,
  errors: {},
};

export default (state = Initial_State, action) => {
  switch (action.type) {
    case GENERATE_REPORTS:
      return {
        ...state,
        loading: true,
      };
    case GENERATE_REPORTS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
      };
    case GENERATE_REPORTS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case FETCH_REPORTS:
      return {
        ...state,
        reports: action.payload,
      };
    case FETCH_REPORTS_FAILED:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};
