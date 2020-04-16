import { combineReducers } from "redux";

import {
  UPLOAD_FILE,
  TOTAL_AMOUNT,
  SPENT_BY_DAY,
  SHOPS_DISTRIBUTION,
  CATEGORY_DISTRIBUTION,
  TIME_RANGE,
  MONTHLY_EXPENSE,
  SET_MONTHS,
} from "../actions/types";

const INITIAL_STATE = {
  currentFile: "",
  months: [],
};

const fileActionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPLOAD_FILE:
      return {
        ...state,
        currentFile: action.payload[0],
        months: [...state.months, ...action.payload[1]],
      };
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
    case CATEGORY_DISTRIBUTION:
      return {
        ...state,
        [action.payload[0]]: {
          ...state[action.payload[0]],
          categoryDistribution: action.payload[1],
        },
      };
    case TIME_RANGE:
      return {
        ...state,
        [action.payload[0]]: {
          ...state[action.payload[0]],
          startDate: action.payload[1],
          endDate: action.payload[2],
        },
      };
    case MONTHLY_EXPENSE:
      return {
        ...state,
        [action.payload[0]]: {
          ...state[action.payload[0]],
          monthlyExpense: action.payload[1],
        },
      };

    default:
      return state;
  }
};

const INIT_STATE = {
  selectedMonths: [],
  selectedShops: [],
};

const menusReducers = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_MONTHS:
      return { ...state, selectedMonths: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  fileActions: fileActionsReducer,
  menus: menusReducers,
});
