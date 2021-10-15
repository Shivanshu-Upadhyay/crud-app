import { combineReducers } from "redux";
import dataReducer from "./reducer";

const rootReducer = combineReducers({
  subject: dataReducer,
});

export default rootReducer;