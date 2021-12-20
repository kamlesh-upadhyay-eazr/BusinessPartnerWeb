import {
  SETTLEMENT_LOADING,
  FETCH_SETTLEMENT_TRANSACTIONS,
  FETCH_SETTLEMENT_TRANSACTIONS_FAILED,
  ADD_BANK_DETAILS_FAILED,
  ADD_BANK_DETAILS,
  FETCH_BANK_DETAILS,
  FETCH_BANK_DETAILS_FAILED,
  CHANGE_DEFAULT_BANK,
  CHANGE_DEFAULT_BANK_FAILED,
} from "../type";

const Initial_State = {
  settlements: null,
  bankDetails: null,
  loading: false,
  errors: {},
};

export default (state = Initial_State, action) => {
  switch (action.type) {
    case SETTLEMENT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SETTLEMENT_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        errors: {},
        settlements: action.payload,
      };
    case FETCH_SETTLEMENT_TRANSACTIONS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case FETCH_BANK_DETAILS:
      return {
        ...state,
        bankDetails: action.payload,
        loading: false,
      };
    case FETCH_BANK_DETAILS_FAILED:
      return {
        ...state,
        errors: action.payload,
        loading: false,
        bankDetails: {},
      };
    case ADD_BANK_DETAILS:
      return {
        ...state,
        bankDetails: action.payload,
        loading: false,
      };
    case ADD_BANK_DETAILS_FAILED:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };
    case CHANGE_DEFAULT_BANK:
      return {
        ...state,
        bankDetails: action.payload,
        loading: false,
      };
    case CHANGE_DEFAULT_BANK_FAILED:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
