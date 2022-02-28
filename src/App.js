import React from "react";
import store from "./redux/store";
import { incrementCounter, decreaseCounter } from "./redux/action";
import { useSelector } from "react-redux";

export const App = () => {
  const counter = useSelector((state) => state);
  console.log(counter);
  return (
    <div>
      <h1>Counter: {store.getState().count} </h1>
      <button onClick={() => store.dispatch(incrementCounter(1))}>ADD</button>
      <button onClick={() => store.dispatch(decreaseCounter(1))}>
        DECREASE
      </button>
    </div>
  );
};
