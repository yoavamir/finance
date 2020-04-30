import dataFetcherBase from "../apis/dataFetcherBase";
import history from "../history";
import {
  INIT_DATA,
  INIT_EXPENSE_DATA,
  UPLOAD_FILE,
  GET_FILES,
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
  IN_REGISTRATION,
  SET_ACTIVE_STEP,
  SET_MONTH_INCOME,
} from "./types";

export const initExpenseData = (formData) => async (dispatch) => {
  const response = await dataFetcherBase.post("/init_expense_data", formData);
  dispatch({ type: INIT_EXPENSE_DATA, payload: response.data });
};

export const initData = () => async (dispatch) => {
  const response = await dataFetcherBase.get("/init_data");
  dispatch({ type: INIT_DATA, payload: response.data });
  history.push("/home");
};

export const uploadFile = (formData) => async (dispatch) => {
  const response = await dataFetcherBase.post("/upload_file", formData);
  dispatch({ type: UPLOAD_FILE, payload: response.data });
  history.push("files/");
};

export const getFiles = () => async (dispatch) => {
  const response = await dataFetcherBase.get("/get_files");
  dispatch({ type: GET_FILES, payload: response.data });
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

export const setRegirsritaion = () => {
  return { type: IN_REGISTRATION };
};

export const setActiveStep = (step) => {
  return { type: SET_ACTIVE_STEP, payload: step };
};

export const setMonthIncome = (month, income) => {
  return { type: SET_MONTH_INCOME, payload: { month, income } };
};
