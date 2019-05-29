import { CLOSE_NAV, SWITCH_NAV } from "./types";

export const closeNav = () => dispatch => {
  dispatch({ type: CLOSE_NAV });
};

export const switchNav = () => dispatch => {
  dispatch({ type: SWITCH_NAV });
};
