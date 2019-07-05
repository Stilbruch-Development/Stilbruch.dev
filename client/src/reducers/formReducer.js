import { SEND_FORM, REFRESH_FORM, FORM_ERROR } from "../actions/types";

export const initialState = {
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  },
  errors: {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    general: ""
  },
  formSend: false,
  formError: false
};

export function formReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_FORM:
      return {
        ...state,
        formData: action.payload,
        formSend: true
      };
    case REFRESH_FORM:
      return {
        ...state,
        formSend: false,
        formError: false
      };
    case FORM_ERROR:
      return {
        ...state,
        errors: action.payload,
        formSend: false,
        formError: true
      };
    default:
      return state;
  }
}
