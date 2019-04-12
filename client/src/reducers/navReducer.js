import { CLOSE_NAV, SWITCH_NAV } from '../actions/types';

const initialState = {
  navbarOpen: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLOSE_NAV:
      return {
        ...state,
        navbarOpen: false,
      };
    case SWITCH_NAV:
    return {
      ...state,
      navbarOpen: !state.navbarOpen,
    };
    default:
      return state;
  }
}
