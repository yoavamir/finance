import { dataReducers } from "./dataReducer";
import { menusReducers } from "./menusReducer";
import { registrationReducer } from "./registrationReducer";
import { combineReducers } from "redux";

export default combineReducers({
  data: dataReducers,
  menus: menusReducers,
  registration: registrationReducer,
});
