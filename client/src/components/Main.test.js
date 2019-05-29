import React from "react";
import Enzyme, { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Main from "./Main";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("Main_Component renders without crashing", () => {
  const wrapper = shallow(<Main />);
  const Component = findByTestAttr(wrapper, "Main_Component");
  expect(Component.length).toBe(1);
});
