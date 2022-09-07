import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { renderWithProviders } from "./utils/test-utils";

const factory = () => renderWithProviders(<App />);

// These are top level integration/e2e tests, usually would prefer to do them with Cypress, because it's more "real" environment and interaction
describe("first step", () => {
  test("renders heading", () => {
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
});

describe("second step", () => {
  const goToSecondStep = async () => {
    const user = userEvent.setup();
    const nextButton = screen.getByText("Next");
    await user.click(nextButton);
  };

  test("renders heading", async () => {
    factory();
    await goToSecondStep();

    expect(screen.getByText("Contact person")).toBeVisible();
  });

  test("renders name field", async () => {
    factory();
    await goToSecondStep();

    expect(screen.getByLabelText("Name")).toBeVisible();
  });

  test("renders surname field", async () => {
    factory();
    await goToSecondStep();

    expect(screen.getByLabelText("Surname")).toBeVisible();
  });

  test("renders job title field", async () => {
    factory();
    await goToSecondStep();

    expect(screen.getByLabelText("Job title")).toBeVisible();
  });

  test("renders email address field", async () => {
    factory();
    await goToSecondStep();
    
    expect(screen.getByLabelText("E-mail address")).toBeVisible();
  });
});
