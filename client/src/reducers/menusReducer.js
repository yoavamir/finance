import {
  SET_MONTHS,
  SET_SHOPS,
  CLEAN_MONTHS,
  CLEAN_SHOPS,
} from "../actions/types";

const MENU_INITIAL_STATE = {
  selectedMonths: [],
  selectedShops: [],
};

export const menusReducers = (state = MENU_INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MONTHS:
      return { ...state, selectedMonths: action.payload };
    case SET_SHOPS:
      return { ...state, selectedShops: action.payload };
    case CLEAN_MONTHS:
      return { ...state, selectedMonths: [] };
    case CLEAN_SHOPS:
      return { ...state, selectedShops: [] };
    default:
      return state;
  }
};
