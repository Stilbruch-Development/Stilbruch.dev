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

const spy = jest.fn();
const testWidth = 420;

beforeAll(() => {
  window.addEventListener("resize", spy);
});

test("<Navbar /> renders with menu closed and does not fire resize event by default", () => {
  const { getByTestId, queryByTestId } = renderWithRedux(<Navbar />, {
    initialState: {
      navbar: {
        navbarOpen: false
      }
    }
  });

  expect(getByTestId("NavLogo")).toBeInTheDocument();
  expect(queryByTestId("NavCancel")).not.toBeInTheDocument();
  expect(queryByTestId("NavMenu")).not.toBeInTheDocument();

  expect(spy).not.toHaveBeenCalled();
  expect(window.innerWidth).not.toBe(testWidth);
});

describe("When resize event is fired", () => {
  beforeAll(() => {
    window.innerWidth = testWidth;
    window.dispatchEvent(new Event("resize"));
  });

  test("<Navbar /> with closed Navbar and viewport <600 only NavMenu is shown", () => {
    const { debug, getByTestId, queryByTestId } = renderWithRedux(<Navbar />, {
      initialState: {
        navbar: {
          navbarOpen: false
        }
      }
    });
    expect(spy).toHaveBeenCalled();
    expect(window.innerWidth).toBe(testWidth);
    expect(getByTestId("NavMenu")).toBeInTheDocument();
    expect(queryByTestId("NavLogo")).not.toBeInTheDocument();
    debug();
  });
});
