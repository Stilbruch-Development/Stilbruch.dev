import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import rootReducer from "../reducers";
import "jest-dom/extend-expect";
import Privacy from "./Privacy";

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
    ...render(
      <Provider store={store}>
        <Router>{ui}</Router>
      </Provider>
    ),
    store
  };
}

test("<Privacy /> renders", () => {
  const { getByTestId } = renderWithRedux(<Privacy />);

  const TermsMain = getByTestId("PrivacyComponent");

  expect(TermsMain).toBeInTheDocument();
  expect(TermsMain).toBeVisible();
  expect(TermsMain).toContainElement(getByTestId("Adress"));
});
