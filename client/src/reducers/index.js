import { combineReducers } from "redux";

const INITIAL_STATE = {
  file_name: "",
};
const uploadFileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPLOAD_FILE":
      return { ...state, file_name: action.payload };
    default:
      return state;
  }
};

const totalAmountReducer = (state = {}, action) => {
  switch (action.type) {
    case "TOTAL_AMOUNT":
      return {
        ...state,
        [action.payload[0]]: {
          spent: action.payload[1],
          ["dateAndAmount"]: action.payload[2],
        },
      };
    default:
      return state;
  }
};

export default combineReducers({
  file: uploadFileReducer,
  totalAmount: totalAmountReducer,
});
