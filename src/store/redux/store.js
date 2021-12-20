import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";

import rootReducer from "./rootReducer";

const initialState = {};

const middleware = [ReduxThunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
