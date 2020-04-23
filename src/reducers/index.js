import { dataReducers } from "./dataReducer";
import { menusReducers } from "./menusReducer";
import { combineReducers } from "redux";

export default combineReducers({
  data: dataReducers,
  menus: menusReducers,
});
