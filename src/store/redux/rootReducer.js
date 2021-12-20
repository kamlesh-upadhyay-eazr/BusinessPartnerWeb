import { combineReducers } from "redux";

// Front
// import Layout from "./layout/reducer";
import Layout from "../layout/reducer";

// Authentication Module
// import Account from "./auth/register/reducer";
// import Login from "./auth/login/reducer";
// import Forget from "./auth/forgetpwd/reducer";
import Auth from "../redux/auth/reducerAuth";
import Product from "../redux/products/reducerProduct";
import Order from "../redux/order/reducerOrder";
import Report from "../redux/report/reducerReport";
import Profile from "../redux/profile/reducerProfile";
import Settlement from "../redux/settlements/reducersettlements";
import Transaction from "../redux/transaction/reducerTransaction";
import Ticket from "../redux/ticket/reducerSupport";
const rootReducer = combineReducers({
  Layout,
  Auth,
  Product,
  Order,
  Report,
  Profile,
  Settlement,
  Transaction,
  Ticket,
});

export default rootReducer;
