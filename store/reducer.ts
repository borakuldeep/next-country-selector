import { IState } from "../types";

type ACTIONTYPE = { type: "SET_SEARCH_ITEMS" | "SET_ERROR"; payload: IState };

const Reducer = (state: IState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "SET_SEARCH_ITEMS":
      return {
        ...action.payload,
      };
    case "SET_ERROR":
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
