import dataFetcherBase from "../apis/dataFetcherBase";
import history from "../history";
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
  CLEAN_MONTHS,
  CLEAN_SHOPS,
} from "./types";

export const initData = () => async (dispatch) => {
  const response = await dataFetcherBase.post("/init_data");
  dispatch({ type: INIT_DATA, payload: response.data });
  history.push("/");
};

export const uploadFile = (formData) => async (dispatch) => {
  const response = await dataFetcherBase.post("/upload_file", formData);
  dispatch({ type: UPLOAD_FILE, payload: response.data });
  history.push("/");
};

export const getTotalAmount = () => async (dispatch) => {
  const response = await dataFetcherBase.get("/total_amount");
  dispatch({ type: TOTAL_AMOUNT, payload: response.data });
};

export const getSpentByDay = (filename) => async (dispatch) => {
  const response = await dataFetcherBase.get("/spent_by_day", {
    params: { filename },
  });
  dispatch({ type: SPENT_BY_DAY, payload: response.data });
};

export const getShopsDistribution = () => async (dispatch) => {
  const response = await dataFetcherBase.get("/shops_distribution");
  dispatch({ type: SHOPS_DISTRIBUTION, payload: response.data });
};

export const getCategoryDistribution = (filename) => async (dispatch) => {
  const response = await dataFetcherBase.get("/category_distribution", {
    params: { filename },
  });
  dispatch({ type: CATEGORY_DISTRIBUTION, payload: response.data });
};

export const getFileTimeRange = (filename) => async (dispatch) => {
  const response = await dataFetcherBase.get("/time_range", {
    params: { filename },
  });
  dispatch({ type: TIME_RANGE, payload: response.data });
};

export const getMonthlyExpense = () => async (dispatch) => {
  const response = await dataFetcherBase.get("/spent_by_month");
  dispatch({ type: MONTHLY_EXPENSE, payload: response.data });
};

export const getShopExpenseByMonth = () => async (dispatch) => {
  const response = await dataFetcherBase.get("/shops_by_months");
  dispatch({ type: SHOPS_BY_MONTHS, payload: response.data });
};

export const setSelectedMonths = (months) => {
  return { type: SET_MONTHS, payload: months };
};

export const setSelectedShops = (shops) => {
  return { type: SET_SHOPS, payload: shops };
};

export const cleanSelectedMonths = () => {
  return { type: CLEAN_MONTHS };
};

export const cleanSelectedShops = () => {
  return { type: CLEAN_SHOPS };
};
