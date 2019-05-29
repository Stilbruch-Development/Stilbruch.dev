import React from "react";
import Enzyme, { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Landing from "./Landing";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("Landing_Component renders without crashing", () => {
  const wrapper = shallow(<Landing />);
  const Component = findByTestAttr(wrapper, "Landing_Component");
  expect(Component.length).toBe(1);
});
