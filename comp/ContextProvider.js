import React, { createContext, useReducer } from "react";
import data from "./Data";
export const ContextBase = createContext();
const initialState = {
  data: data,
  firstChange: "",
  second: {},
  secondChange: "",
  third: {},
  thirdChange: ""
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      const secondItem = state.data.find(
        item => item.model == parseInt(action.payload)
      );
      return {
        ...state,
        firstChange: action.payload,
        second: secondItem
      };
    case "CHANGE2":
      const thirdItem = state.second.year.find(
        item => item.build === parseInt(action.payload)
      );

      return {
        ...state,
        secondChange: action.payload,
        third: thirdItem
      };
    case "CHANGE3":
      return {
        ...state,
        thirdChange: action.payload
      };
    default:
      return state;
  }
};
const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextBase.Provider value={{ state, dispatch }}>
      {props.children}
    </ContextBase.Provider>
  );
};

export default ContextProvider;
