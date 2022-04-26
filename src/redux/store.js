import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";

import {messageReducer} from "./reducers/messageReducer";
import {userReducer} from "./reducers/userReducer";

const rootReducer = combineReducers({
  messageReducer,
  userReducer
})

const composeEnhancer = compose(applyMiddleware(thunk) ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const store = createStore(rootReducer, composeEnhancer);