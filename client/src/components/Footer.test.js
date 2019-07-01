import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import Footer from "./Footer";

test("<Footer />", () => {
  const { getByTestId, debug } = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  debug();

  const FooterMain = getByTestId("FooterMain");

  expect(FooterMain).toBeInTheDocument();
  expect(FooterMain).toBeVisible();
  expect(FooterMain).toContainElement(getByTestId("FooterLogo"));
  expect(FooterMain).toContainElement(getByTestId("FooterItemKontakt"));
  expect(FooterMain).toContainElement(getByTestId("FooterItemDatenschutz"));
  expect(FooterMain).toContainElement(getByTestId("FooterItemImpressum"));

  fireEvent.click(getByTestId("FooterItemKontakt"));

  const lLoc = getByTestId("FooterMain").getBoundingClientRect();
  console.log(lLoc);
});
