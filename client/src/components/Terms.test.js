import React from "react";
import Enzyme, { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Terms from "./Terms";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("Terms_Component renders without crashing", () => {
  const wrapper = shallow(<Terms />);
  const Component = findByTestAttr(wrapper, "Terms_Component");
  expect(Component.length).toBe(1);
});
