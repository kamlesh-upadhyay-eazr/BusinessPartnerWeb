import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  ADD_PRODUCT,
  ADD_PRODUCT_FAILED,
  PROFILE_LOADING,
  GET_PRODUCTCATEGORY_FAILED,
  GET_PRODUCTCATEGORY,
  GET_PRODUCTS_BY_ID,
  PRODUCTS_BY_ID_LOADING,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_FAILED,
} from "../type";

const Initial_State = {
  products: null,
  product: null,
  category: null,
  loading: false,
  update: null,

  errors: {},
};

export default (state = Initial_State, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        errors: {},
        products: action.payload,
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        loading: false,
      };
    case ADD_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case GET_PRODUCTCATEGORY:
      return {
        ...state,
        loading: false,
        errors: {},
        category: action.payload,
      };
    case GET_PRODUCTCATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case PRODUCTS_BY_ID_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_BY_ID:
      return {
        ...state,
        loading: false,
        errors: {},
        product: action.payload,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        loading: false,
        errors: {},
        update: action.payload,
      };
    case UPDATE_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
