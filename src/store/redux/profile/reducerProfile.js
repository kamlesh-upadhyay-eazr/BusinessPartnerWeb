import {
  GET_PROFILE,
  PROFILE_LOADING,
  PROFILE_ERRORS,
  SHOW_MODAL,
  HIDE_MODAL,
  SHOW_EDIT_UPI_MODAL,
  HIDE_EDIT_UPI_MODAL,
} from "../type";

const Initial_State = {
  profile: {},
  loading: false,
  errors: {},
  showModal: false,
  editUpiModal: false,
};

export default (state = Initial_State, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE:
      return {
        
        ...state,
        profile: action.payload,
        loading: false,
        errors: {},
      };
    case PROFILE_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
        loading: false,
      };
    case HIDE_MODAL:
      return {
        ...state,
        showModal: false,
      };
    case SHOW_EDIT_UPI_MODAL:
      return {
        ...state,
        editUpiModal: true,
      };
    case HIDE_EDIT_UPI_MODAL:
      return {
        ...state,
        editUpiModal: false,
      };
    default:
      return state;
  }
};
