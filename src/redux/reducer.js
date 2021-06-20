import { SET_CATEGORY } from "./actions";
import { initialState } from "./store";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
}
