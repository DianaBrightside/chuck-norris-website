import { createStore } from "redux";
import { reducer } from "./reducer";

export const initialState = {
  category: "",
};

export function configureStore() {
  return createStore(reducer, initialState);
}
