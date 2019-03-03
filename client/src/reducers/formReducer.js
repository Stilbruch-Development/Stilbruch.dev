import { SEND_FORM } from '../actions/types';

const initialState = {
  formSend: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_FORM:
      return {
        ...state,
      };
    default:
      return state;
  }
}
