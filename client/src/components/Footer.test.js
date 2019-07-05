import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "jest-dom/extend-expect";
import Footer from "./Footer";

test("<Footer />", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  const FooterMain = getByTestId("FooterMain");

  expect(FooterMain).toBeInTheDocument();
  expect(FooterMain).toBeVisible();
  expect(FooterMain).toContainElement(getByTestId("FooterLogo"));
  expect(FooterMain).toContainElement(getByTestId("FooterItemKontakt"));
  expect(FooterMain).toContainElement(getByTestId("FooterItemDatenschutz"));
  expect(FooterMain).toContainElement(getByTestId("FooterItemImpressum"));

  expect(getByTestId("FooterLogo")).toHaveAttribute("href", "/#Start");
  expect(getByTestId("FooterItemKontakt")).toHaveAttribute("href", "/#Kontakt");
  expect(getByTestId("FooterItemDatenschutz")).toHaveAttribute(
    "href",
    "/datenschutz/#top"
  );
  expect(getByTestId("FooterItemImpressum")).toHaveAttribute(
    "href",
    "/impressum/#top"
  );
});
