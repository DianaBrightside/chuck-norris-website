export const SET_CATEGORY = "SET_CATEGORY";

export function setCaterogy(category) {
  return {
    type: SET_CATEGORY,
    payload: category,
  };
}
