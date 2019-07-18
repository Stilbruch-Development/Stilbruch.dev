import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
import rootReducer from "../reducers";
import "jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import BoxK from "./BoxK";

afterEach(cleanup);

const middleware = [thunk];

function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middleware)
    )
  } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

test("<BoxK /> shows FormNotification when all form fields are valid", async () => {
  const { getByTestId, queryByTestId, debug } = renderWithRedux(<BoxK />);

  userEvent.type(getByTestId("InputFirstName"), "Michael");
  userEvent.type(getByTestId("InputLastName"), "Hübner");
  userEvent.type(getByTestId("InputEmail"), "m.huebner@email.com");
  userEvent.type(getByTestId("TextareaMessage"), "This is a test!");

  expect(getByTestId("InputEmail")).toHaveAttribute(
    "value",
    "m.huebner@email.com"
  );

  expect(getByTestId("TextareaMessage").value).toBe("This is a test!");

  debug();

  fireEvent.click(getByTestId("ButtonSubmit"));

  debug();

  expect(queryByTestId("FirstName_Error")).not.toBeInTheDocument();
  expect(queryByTestId("LastName_Error")).not.toBeInTheDocument();
  expect(queryByTestId("Email_Error")).not.toBeInTheDocument();
  expect(queryByTestId("Message_Error")).not.toBeInTheDocument();

  debug();

  const FormSend = await waitForElement(() => getByTestId("FormSend"));

  expect(FormSend).toBe(true);
});
