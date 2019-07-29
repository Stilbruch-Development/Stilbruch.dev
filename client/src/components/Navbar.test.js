import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import rootReducer from "../reducers";
import "jest-dom/extend-expect";
import Navbar from "./Navbar";
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
    ...render(
      <Provider store={store}>
        <Router>{ui}</Router>
      </Provider>
    ),
    store
  };
}

test("<Navbar /> with new Store: ", () => {
  const { debug, getByTestId, queryByTestId } = renderWithRedux(<Navbar />, {
    initialState: {
      navbar: {
        navbarOpen: false
      }
    }
  });

  expect(getByTestId("NavLogo")).toBeInTheDocument();
  expect(queryByTestId("NavCancel")).not.toBeInTheDocument();
  expect(queryByTestId("NavMenu")).not.toBeInTheDocument();
  debug();
});
