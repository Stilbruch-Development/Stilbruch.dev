import React from "react";
import Enzyme, { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Footer from "./Footer";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Footer {...props} />);
};

test("Footer_Component renders without crashing", () => {
  const wrapper = setup();
  const Component = findByTestAttr(wrapper, "Footer_Component");
  expect(Component.length).toBe(1);
});
