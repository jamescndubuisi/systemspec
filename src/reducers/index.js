import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorreducer from "./errorreducer";

export default combineReducers({
  auth: authReducer,
  errors: errorreducer
});
