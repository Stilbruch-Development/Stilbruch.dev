import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup, wait } from "@testing-library/react";
import rootReducer from "./reducers/index";
import "jest-dom/extend-expect";
import App from "./App";

jest.mock("./components/styled_components/GlobalStyle");

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
    ),
  } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

test("<App /> renders", () => {
  const { getByTestId } = renderWithRedux(<App />);

  const AppComponent = getByTestId("AppComponent");

  expect(AppComponent).toBeInTheDocument();
  expect(AppComponent).toBeVisible();
  expect(AppComponent).toContainElement(getByTestId("NavbarComponent"));
  expect(AppComponent).toContainElement(getByTestId("MainComponent"));
  expect(AppComponent).toContainElement(getByTestId("FooterMain"));

  // expect(container.firstChild).toMatchSnapshot();
});

Element.prototype.scrollIntoView = jest.fn();

test("<App/> shows Privacy Page page when clicking the links in the Footer_Component", async () => {
  const { getByTestId, queryByTestId } = render(<App />);

  expect(getByTestId("MainComponent")).toBeInTheDocument();

  fireEvent.click(getByTestId("FooterItemDatenschutz"));

  await wait(() => {
    expect(getByTestId("PrivacyComponent")).toBeInTheDocument();
    expect(queryByTestId("MainComponent")).not.toBeInTheDocument();
  });
});
