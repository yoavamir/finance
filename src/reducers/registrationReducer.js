import {
  IN_REGISTRATION,
  SET_ACTIVE_STEP,
  INIT_EXPENSE_DATA,
  SET_MONTH_INCOME,
} from "../actions/types";

const REGISTRAION_INITIAL_STATE = {
  inRegistration: false,
  activeStep: 1,
  expensesDataInit: false,
  months: [],
  income: [],
};

export const registrationReducer = (
  state = REGISTRAION_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case IN_REGISTRATION:
      return { ...state, inRegistration: true };
    case SET_ACTIVE_STEP:
      return { ...state, activeStep: action.payload };
    case INIT_EXPENSE_DATA:
      return {
        ...state,
        expensesDataInit: true,
        activeStep: 2,
        months: action.payload,
      };
    case SET_MONTH_INCOME:
      return {
        ...state,
        income: {
          ...state.income,
          [action.payload.month]: action.payload.income,
        },
      };
    default:
      return state;
  }
};
