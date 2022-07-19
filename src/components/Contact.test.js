import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import Contact from "./Contact";

test("Contact renders correctly", () => {
  const { getByPlaceholderText, getByRole } = render(<Contact />);

  // expect(getByPlaceholderText(/^aaa/i)).toBeInTheDocument();

  expect(getByRole("button", { name: /Close/i })).toBeInTheDocument();
});
