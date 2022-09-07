import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./utils/test-utils";

const factory = () => renderWithProviders(<App />);

// These are top level integration/e2e tests, usually would prefer to do them with Cypress, because it's more "real" environment and interaction
test("renders heading of first step", () => {
  factory();

  expect(screen.getByText("Company")).toBeVisible();
});

test("renders company code", () => {
  factory();

  expect(screen.getByLabelText("Company code")).toBeVisible();
});

test("renders company name field", () => {
  factory();

  expect(screen.getByLabelText("Company name")).toBeVisible();
});

test("renders country of registration field", () => {
  factory();

  expect(screen.getByLabelText("Country of registration")).toBeVisible();
});
