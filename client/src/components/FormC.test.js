// counter.test.js
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";
import FormC from "./FormC";
import rootReducer from "../reducers";

afterEach(cleanup);

function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

test("<FormC /> renders", () => {
  const { getByTestId, debug } = renderWithRedux(<FormC />);

  debug();

  const FormMain = getByTestId("FormMain");

  expect(FormMain).toBeInTheDocument();
  expect(FormMain).toBeVisible();
  expect(FormMain).toContainElement(getByTestId("InputFirstName"));
});
