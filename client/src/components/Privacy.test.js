import React from "react";
import Enzyme, { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Privacy from "./Privacy";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("Privacy_Component renders without crashing", () => {
  const wrapper = shallow(<Privacy />);
  const Component = findByTestAttr(wrapper, "Privacy_Component");
  expect(Component.length).toBe(1);
});
