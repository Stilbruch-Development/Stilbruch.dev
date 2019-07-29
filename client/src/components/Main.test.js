import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import rootReducer from "../reducers";
import "jest-dom/extend-expect";
import Main from "./Main";
import "jest-styled-components";

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

test("<Main /> renders", () => {
  const { getByTestId } = renderWithRedux(<Main />);

  const MainComponent = getByTestId("MainComponent");

  expect(MainComponent).toBeInTheDocument();
  expect(MainComponent).toBeVisible();
});
