import fileActions from "../apis/fileActions";
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
} from "./types";

export const initData = () => async (dispatch) => {
  const response = await fileActions.post("/init_data");
  dispatch({ type: INIT_DATA, payload: response.data });
  history.push("/");
};

export const uploadFile = (formData) => async (dispatch) => {
  const response = await fileActions.post("/upload_file", formData);
  dispatch({ type: UPLOAD_FILE, payload: response.data });
  history.push("/");
};

export const getTotalAmount = (filename) => async (dispatch) => {
  const response = await fileActions.get("/total_amount", {
    params: { filename },
  });
  dispatch({ type: TOTAL_AMOUNT, payload: response.data });
};

export const getSpentByDay = (filename) => async (dispatch) => {
  const response = await fileActions.get("/spent_by_day", {
    params: { filename },
  });
  dispatch({ type: SPENT_BY_DAY, payload: response.data });
};

export const getShopsDistribution = () => async (dispatch) => {
  const response = await fileActions.get("/shops_distribution");
  dispatch({ type: SHOPS_DISTRIBUTION, payload: response.data });
};

export const getCategoryDistribution = (filename) => async (dispatch) => {
  const response = await fileActions.get("/category_distribution", {
    params: { filename },
  });
  dispatch({ type: CATEGORY_DISTRIBUTION, payload: response.data });
};

export const getFileTimeRange = (filename) => async (dispatch) => {
  const response = await fileActions.get("/time_range", {
    params: { filename },
  });
  dispatch({ type: TIME_RANGE, payload: response.data });
};

export const getMonthlyExpense = () => async (dispatch) => {
  const response = await fileActions.get("/spent_by_month");
  dispatch({ type: MONTHLY_EXPENSE, payload: response.data });
};

export const getShopExpenseByMonth = (filename) => async (dispatch) => {
  const response = await fileActions.get("/shops_by_months", {
    params: { filename },
  });
  dispatch({ type: SHOPS_BY_MONTHS, payload: response.data });
};

export const setSelectedMonths = (months) => {
  return { type: SET_MONTHS, payload: months };
};

export const setSelectedShops = (shops) => {
  return { type: SET_SHOPS, payload: shops };
};
