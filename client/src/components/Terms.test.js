import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import rootReducer from "../reducers";
import "jest-dom/extend-expect";
import Terms from "./Terms";

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

test("<Terms /> renders", () => {
  const { getByTestId } = renderWithRedux(<Terms />);

  const TermsMain = getByTestId("TermsComponent");

  expect(TermsMain).toBeInTheDocument();
  expect(TermsMain).toBeVisible();
  expect(TermsMain).toContainElement(getByTestId("Adress"));
});
