import {
  ORDER_TRANSACTIONS,
  ORDER_TRANSACTIONS_LOADINNG,
  ORDER_TRANSACTIONS_FAILD,
  FETCH_SINGLE_TRANSACTIONS,
  FETCH_SINGLE_TRANSACTIONS_FAILED,
  ORDER_TRANSACTIONS_CHANGE_STATUS,
  CHANGE_ORDER_TRANSACTSTATUS_FAILED,
  TOTAL_SUM,
  TOTAL_TRANSACTIONS_SUM,
  TOTAL_COMPLETED_SUM,
  TOTAL_FAILED_SUM,
  FETCH_COMPLETED_TRANSACTIONS,
  FETCH_FAILED_TRANSACTIONS,
  FETCH_FAILED_TRANSACTIONS_FAILED,
  FETCH_REFUNDED_TRANSACTIONS,
  FETCH_COMPLETED_TRANSACTIONS_FAILED,
} from "../type";

const Initial_State = {
  transactions: null,
  transaction: null,
  failedTransactions: null,
  completedTransactions: null,
  totalSum: 0,
  totalTransactionsSum:0,
  totalFailedSum: 0,
  totalCompletedSum: 0,
  loading: false,
  errors: {},
};

export default (state = Initial_State, action) => {
  switch (action.type) {
    case ORDER_TRANSACTIONS_LOADINNG:
      return {
        ...state,
        loading: true,
      };
    case ORDER_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        errors: {},
        transactions: action.payload.transactions,
        totalSum: action.payload.totalSum,
        totalTransactionsSum: action.payload.totalTransactionsSum,
      };

    case TOTAL_SUM:
      return {
        ...state,
        loading: false,
        errors: {},
        totalSum: action.payload,
        totalTransactionsSum: action.payload,
      };
    case ORDER_TRANSACTIONS_FAILD:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case ORDER_TRANSACTIONS_CHANGE_STATUS:
      const updatedOrder = action.payload;
      let objIndex = state.transactions.findIndex(
        (obj) => obj._id == updatedOrder._id
      );

      return {
        ...state,
        loading: false,
        transaction: updatedOrder,
        transactions: state.transactions.map((order, i) =>
          i === objIndex ? { ...order, status: updatedOrder.status } : order
        ),
      };
    case CHANGE_ORDER_TRANSACTSTATUS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case FETCH_COMPLETED_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        completedTransactions: action.payload.transactions,
        totalCompletedSum: action.payload.totalCompletedSum,
      };

      case TOTAL_COMPLETED_SUM:
        return {
          ...state,
          loading: false,
          errors: {},
          totalCompletedSum: action.payload,
        };

    case FETCH_COMPLETED_TRANSACTIONS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };


    case TOTAL_FAILED_SUM:
      return {
        ...state,
        loading: false,
        errors: {},
        totalFailedSum: action.payload,
      };

    case FETCH_FAILED_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        failedTransactions: action.payload,
      };

    case FETCH_FAILED_TRANSACTIONS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case FETCH_REFUNDED_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case FETCH_SINGLE_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        transaction: action.payload,
      };
    case FETCH_SINGLE_TRANSACTIONS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
