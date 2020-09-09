import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
export type Store = ReturnType<typeof rootReducer>;

let store: any;
if (process.env.NODE_ENV === "development") {
  const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;
  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))
  );
} else {
  store = createStore(rootReducer, applyMiddleware(ReduxThunk));
}

export default store;
