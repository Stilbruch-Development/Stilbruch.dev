import React from "react";
import Enzyme, { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { Navbar } from "./Navbar";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Navbar {...props} />);
};

test("Navbar_Component renders without crashing", () => {
  const wrapper = setup();
  const Navbar_Component = findByTestAttr(wrapper, "Navbar_Component");
  expect(Navbar_Component.length).toBe(1);
});

test("if navbar menu(mobile) is open or there is no mobile view, render NavLogo", () => {
  const wrapper = setup({ navbar: { navbarOpen: true } });
  wrapper.setState({ mobileView: false });
  const NavLogo_Component = findByTestAttr(wrapper, "NavLogo_Component");
  expect(NavLogo_Component.length).toBe(1);
});
