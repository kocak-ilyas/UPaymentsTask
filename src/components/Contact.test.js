import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "./Contact";

test("Home link correctly", () => {
  const { getByRole } = render(<Contact />);
  const link = getByRole("link", { name: /Home/i });
  expect(link.getAttribute("href")).toBe("/");
});

test("Repo link correctly", () => {
  const { getByRole } = render(<Contact />);
  const link = getByRole("link", { name: /UPaymentsTask/i });
  expect(link.getAttribute("href")).toBe("https://github.com/kocak-ilyas/UPaymentsTask");
});

test("Demo link correctly", () => {
  const { getByRole } = render(<Contact />);
  const link = getByRole("link", { name: /upayment.netlify/i });
  expect(link.getAttribute("href")).toBe("https://upayment.netlify.app/");
});

test("Linkedin link correctly", () => {
  const { getByRole } = render(<Contact />);
  const link = getByRole("link", { name: /www.linkedin.com/i });
  expect(link.getAttribute("href")).toBe("https://www.linkedin.com/in/ilyaskocak");
});
