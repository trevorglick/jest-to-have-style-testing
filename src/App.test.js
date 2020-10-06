import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import "./App.css";
import App from "./App";

test("renders without error", () => {
  const { getByText } = render(<App />);
  const firstPart = getByText(/first part/i);
  expect(firstPart).toBeInTheDocument();
});

test("button is red  Styled-components", () => {
  render(<App />);
  expect(screen.getByTestId("button")).toHaveStyleRule("color", "red");
});

test("test1 has red font Styled-components", () => {
  render(<App />);
  expect(screen.getByTestId("test1")).toHaveStyleRule("color", "red");
});

test("test2 has blue font Styled-components", () => {
  render(<App />);
  expect(screen.getByTestId("test2")).toHaveStyleRule("color", "blue");
});

test("testred has red font from .css import", () => {
  const { getByTestId } = render(<App />);
  const testRed = getByTestId("testred");
  expect(testRed).toHaveStyle("color: red");
});

test("testred sibling has blue font from .css import", () => {
  const { getByTestId } = render(<App />);
  const testRed = getByTestId("testred");
  expect(testRed).toHaveStyle("color: red");
});
