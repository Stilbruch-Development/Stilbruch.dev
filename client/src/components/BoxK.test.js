import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup, wait } from "@testing-library/react";
import rootReducer from "../reducers";
import "jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import BoxK from "./BoxK";
import "jest-styled-components";
import axiosMock from "axios";

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

test("<BoxK /> renders", () => {
  const { getByTestId, container } = renderWithRedux(<BoxK />);

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

test("<FormC/> Fields render with jest-styled-components", () => {
  const { getByTestId } = renderWithRedux(<BoxK />);

  expect(getByTestId("InputFirstName")).toHaveStyle(
    "background: rgba(24, 24, 24, 0.5) !important"
  );
  expect(getByTestId("InputFirstName")).toHaveStyleRule(
    "color",
    "rgb(255,0,0) !important"
  );
});

test("<BoxK /> shows errors when clicking submit button with empty form fields", () => {
  const { getByTestId } = renderWithRedux(<BoxK />);

  fireEvent.click(getByTestId("ButtonSubmit"));

  expect(getByTestId("FirstName_Error")).toBeInTheDocument();
  expect(getByTestId("LastName_Error")).toBeInTheDocument();
  expect(getByTestId("Email_Error")).toBeInTheDocument();
  expect(getByTestId("Message_Error")).toBeInTheDocument();
});

test("<BoxK /> shows only message_error when clicking submit button with only empty message field", () => {
  const { getByTestId, queryByTestId } = renderWithRedux(<BoxK />);

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
  axiosMock.post.mockResolvedValueOnce({ data: {} });

  const { getByTestId, queryByTestId } = renderWithRedux(<BoxK />);

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

  await wait(() => {
    expect(getByTestId("FormSend")).toBeInTheDocument();
    expect(queryByTestId("FirstName_Error")).not.toBeInTheDocument();
    expect(queryByTestId("LastName_Error")).not.toBeInTheDocument();
    expect(queryByTestId("Email_Error")).not.toBeInTheDocument();
    expect(queryByTestId("Message_Error")).not.toBeInTheDocument();
  });
});

// test("<BoxK /> with new Store", () => {
//   const { debug } = renderWithRedux(<BoxK />, {
//     initialState: {
//       form: {
//         formData: {
//           firstName: "",
//           lastName: "",
//           email: "",
//           message: ""
//         },
//         errors: {
//           firstName_error: "",
//           lastName_error: "",
//           email_error: "",
//           message_error: "",
//           general_error: ""
//         },
//         formSend: true,
//         formError: false
//       }
//     }
//   });
//   debug();
// });
