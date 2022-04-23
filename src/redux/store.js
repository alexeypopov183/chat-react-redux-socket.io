import {combineReducers, createStore} from "redux";

import {messageReducer} from "./reducers/messageReducer";
import {userReducer} from "./reducers/userReducer";

const rootReducer = combineReducers({
  messageReducer,
  userReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());