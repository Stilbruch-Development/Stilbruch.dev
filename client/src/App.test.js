import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

jest.mock("./components/styled_components/GlobalStyle");

test("Stilbruch.dev renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("App_Component renders without crashing", () => {
  const wrapper = shallow(<App />);
  const AppComponent = findByTestAttr(wrapper, "App_Component");
  expect(AppComponent.length).toBe(1);
});
