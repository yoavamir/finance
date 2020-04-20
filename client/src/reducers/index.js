import { combineReducers } from "redux";

import {
  INIT_DATA,
  UPLOAD_FILE,
  TOTAL_AMOUNT,
  SPENT_BY_DAY,
  SHOPS_DISTRIBUTION,
  CATEGORY_DISTRIBUTION,
  TIME_RANGE,
  MONTHLY_EXPENSE,
  SHOPS_BY_MONTHS,
  SET_MONTHS,
  SET_SHOPS,
} from "../actions/types";

const INITIAL_STATE = {
  currentFile: "",
  months: [],
  shops: [],
  monthlyExpense: null,
  shopsDistribution: null,
  spent: null,
};

const fileActionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INIT_DATA:
      return {
        ...state,
        months: [...state.months, ...action.payload[0]],
        shops: [...state.shops, ...action.payload[1]],
      };
    case UPLOAD_FILE:
      return {
        ...state,
        currentFile: action.payload[0],
        months: [...state.months, ...action.payload[1]],
        shops: [...state.shops, ...action.payload[2]],
      };
    case TOTAL_AMOUNT:
      return {
        ...state,
        spent: action.payload,
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
        shopsDistribution: action.payload,
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
        monthlyExpense: action.payload,
      };
    case SHOPS_BY_MONTHS:
      return {
        ...state,
        shopsByMonths: action.payload,
      };

    default:
      return state;
  }
};

const MENU_INITIAL_STATE = {
  selectedMonths: [],
  selectedShops: [],
};

const menusReducers = (state = MENU_INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MONTHS:
      return { ...state, selectedMonths: action.payload };
    case SET_SHOPS:
      return { ...state, selectedShops: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  fileActions: fileActionsReducer,
  menus: menusReducers,
});
