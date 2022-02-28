import { INC_COUNTER, DEC_COUNTER } from "./actionTypes";

const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INC_COUNTER:
      console.log(state.count);
      return {
        count: state.count + action.amount,
      };
    case DEC_COUNTER: {
      return {
        count: state.count - action.amount,
      };
    }
    default:
      return state;
  }
};

export default counter;
