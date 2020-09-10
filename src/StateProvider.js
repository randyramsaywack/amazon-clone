import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, childen }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {childen}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
