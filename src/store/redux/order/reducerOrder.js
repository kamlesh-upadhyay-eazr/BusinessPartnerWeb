import {
  ORDER_LOADING,
  FETCH_ORDER,
  FETCH_ORDER_FAILED,
  CHANGE_ORDER_STATUS,
  CHANGE_ORDER_STATUS_FAILED,
  FETCH_SINGLE_ORDER,
  FETCH_SINGLE_ORDER_FAILED,
} from "../type";

const Initial_State = {
  orderTransactions: null,
  order: null,
  loading: false,
  errors: {},
};

export default (state = Initial_State, action) => {
  switch (action.type) {
    case ORDER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ORDER:
      return {
        ...state,
        loading: false,
        errors: {},
        orderTransactions: action.payload,
      };
    case FETCH_ORDER_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case CHANGE_ORDER_STATUS:
      const updatedOrder = action.payload;
      let objIndex = state.orderTransactions.findIndex(
        (obj) => obj._id == updatedOrder._id
      );

      return {
        ...state,
        loading: false,
        order: updatedOrder,
        orderTransactions: state.orderTransactions.map((order, i) =>
          i === objIndex ? { ...order, status: updatedOrder.status } : order
        ),
      };
    case CHANGE_ORDER_STATUS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case FETCH_SINGLE_ORDER:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case FETCH_SINGLE_ORDER_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
