import axios from "axios";
import { SEND_FORM, REFRESH_FORM, FORM_ERROR } from "./types";

export const sendForm = form => dispatch => {
  axios
    .post("/test", form) /* test route: /test */
    .then(res => dispatch({ type: SEND_FORM, payload: res.data }))
    .catch(function(error) {
      if (error) {
        dispatch({
          type: FORM_ERROR,
          payload: {
            general: `Uups! Etwas ist schief gegangen. Die Nachricht wurde nicht gesendet.`
          }
        });
      }
    });
};

// export const refreshForm = () => dispatch => {
//   dispatch({ type: REFRESH_FORM });
// };

export function refreshForm() {
  return { type: REFRESH_FORM };
}

// export const formErrors = errors => dispatch => {
//   dispatch({ type: FORM_ERROR, payload: errors });
// };

export function formErrors(errors) {
  return { type: FORM_ERROR, errors };
}
