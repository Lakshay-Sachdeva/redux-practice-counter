import { INC_COUNTER, DEC_COUNTER } from "./actionTypes";

const incrementCounter = (amount) => {
  return {
    type: INC_COUNTER,
    amount,
  };
};

const decreaseCounter = (amount) => {
  return {
    type: DEC_COUNTER,
    amount,
  };
};

export { incrementCounter, decreaseCounter };
