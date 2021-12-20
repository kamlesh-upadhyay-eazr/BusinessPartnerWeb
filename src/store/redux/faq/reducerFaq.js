import {
  FETCH_FAQ,
  FETCH_FAQ_FAILED,
  FETCH_FAQ_LOADING,
} from "../type";

const Initial_State = {
  reports: null,
  loading: false,
name:{"name":"ajay"},
  errors: {},
};

export default (state = Initial_State, action) => {
  switch (action.type) {

    case GET_AJAY:return{
      ...state
    }

    case FETCH_FAQ_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FAQ:
      return {
        ...state,
        profile: action.payload,
        loading: false,
        errors: {},
      };
    case FETCH_FAQ_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
