import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import {
  render,
  fireEvent,
  cleanup,
  waitForDomChange,
  waitForElement
} from "@testing-library/react";
import rootReducer from "../reducers";
import "jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import FormC from "./FormC";

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

test("<FormC /> renders", () => {
  const { getByTestId, container } = renderWithRedux(<FormC />);

  const FormMain = getByTestId("FormMain");

  expect(FormMain).toBeInTheDocument();
  expect(FormMain).toBeVisible();
  expect(FormMain).toContainElement(getByTestId("InputFirstName"));
  expect(FormMain).toContainElement(getByTestId("InputLastName"));
  expect(FormMain).toContainElement(getByTestId("InputEmail"));
  expect(FormMain).toContainElement(getByTestId("TextareaMessage"));
  expect(getByTestId("InputEmail1")).toBeInTheDocument();
  expect(getByTestId("InputEmail1")).not.toBeVisible();

  expect(container.firstChild).toMatchSnapshot();
});

test("<FormC /> shows errors when clicking submit button with empty form fields", () => {
  const { getByTestId } = renderWithRedux(<FormC />);

  fireEvent.click(getByTestId("ButtonSubmit"));

  expect(getByTestId("FirstName_Error")).toBeInTheDocument();
  expect(getByTestId("LastName_Error")).toBeInTheDocument();
  expect(getByTestId("Email_Error")).toBeInTheDocument();
  expect(getByTestId("Message_Error")).toBeInTheDocument();
});

test("<FormC /> shows only message_error when clicking submit button with only empty message field", () => {
  const { getByTestId, queryByTestId } = renderWithRedux(<FormC />);

  userEvent.type(getByTestId("InputFirstName"), "Michael");
  userEvent.type(getByTestId("InputLastName"), "Hübner");
  userEvent.type(getByTestId("InputEmail"), "m.huebner@email.com");

  expect(getByTestId("InputEmail")).toHaveAttribute(
    "value",
    "m.huebner@email.com"
  );

  fireEvent.click(getByTestId("ButtonSubmit"));

  expect(queryByTestId("FirstName_Error")).not.toBeInTheDocument();
  expect(queryByTestId("LastName_Error")).not.toBeInTheDocument();
  expect(queryByTestId("Email_Error")).not.toBeInTheDocument();
  expect(queryByTestId("Message_Error")).toBeInTheDocument();
});

test("<BoxK /> shows FormNotification when all form fields are valid", async () => {
  const {
    getByTestId,
    queryByTestId,
    getByText,
    debug,
    container
  } = renderWithRedux(<FormC />);

  userEvent.type(getByTestId("InputFirstName"), "Michael");
  userEvent.type(getByTestId("InputLastName"), "Hübner");
  userEvent.type(getByTestId("InputEmail"), "m.huebner@email.com");
  userEvent.type(getByTestId("TextareaMessage"), "This is a test!");

  expect(getByTestId("InputEmail")).toHaveAttribute(
    "value",
    "m.huebner@email.com"
  );

  expect(getByTestId("TextareaMessage").value).toBe("This is a test!");

  fireEvent.click(getByTestId("ButtonSubmit"));

  // waitForDomChange({ container })
  //   .then(() => console.log("DOM changed!"))
  //   .catch(err => console.log(`Error you need to deal with: ${err}`));
  // container.append(document.createElement("p"));

  const formSend = await waitForElement(function() {
    getByTestId("FormSend");
    debug();
  });

  expect(formSend).toBeInTheDocument();

  expect(queryByTestId("FirstName_Error")).not.toBeInTheDocument();
  expect(queryByTestId("LastName_Error")).not.toBeInTheDocument();
  expect(queryByTestId("Email_Error")).not.toBeInTheDocument();
  expect(queryByTestId("Message_Error")).not.toBeInTheDocument();
});
