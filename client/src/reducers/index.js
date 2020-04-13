import { combineReducers } from "redux";
import {
  UPLOAD_FILE,
  TOTAL_AMOUNT,
  SPENT_BY_DAY,
  SHOPS_DISTRIBUTION,
} from "../actions/types";

const INITIAL_STATE = {
  currentFile: "",
};

const fileActionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPLOAD_FILE:
      return { ...state, currentFile: action.payload };
    case TOTAL_AMOUNT:
      return {
        ...state,
        [action.payload[0]]: {
          ...state[action.payload[0]],
          spent: action.payload[1],
        },
      };
    case SPENT_BY_DAY:
      return {
        ...state,
        [action.payload[0]]: {
          ...state[action.payload[0]],
          spentByDay: action.payload[1],
        },
      };
    case SHOPS_DISTRIBUTION:
      return {
        ...state,
        [action.payload[0]]: {
          ...state[action.payload[0]],
          shopsDistribution: action.payload[1],
        },
      };

    default:
      return state;
  }
};

export default combineReducers({
  fileActions: fileActionsReducer,
});
