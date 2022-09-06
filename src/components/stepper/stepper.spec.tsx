import { render, screen } from "@testing-library/react";
import React from "react";
import { Stepper } from "./stepper";
import userEvent from "@testing-library/user-event";

const defaultProps = {
  activeStep: 0,
  nextHandler: () => {},
  backHandler: () => {},
  submitHandler: () => {},
  stepperModel: [],
};

const factory = (props: Partial<React.ComponentProps<typeof Stepper>>) =>
  render(<Stepper {...defaultProps} {...props} />);

const mockStepsModel = [
  {
    heading: "First step heading",
  },
  {
    heading: "Second step heading",
  },
  {
    heading: "Third step heading",
  },
];

test("renders first step heading when first step is active", () => {
  factory({ activeStep: 0, stepperModel: mockStepsModel });

  expect(screen.getByText("First step heading")).toBeVisible();
});

test("renders second step heading when second step is active", () => {
  factory({ activeStep: 1, stepperModel: mockStepsModel });

  expect(screen.getByText("Second step heading")).toBeVisible();
});

test("renders only next button on first step", () => {
  factory({ activeStep: 0, stepperModel: mockStepsModel });

  expect(screen.getByText("Next")).toBeVisible();
  expect(screen.queryByText("Submit")).toBeNull();
  expect(screen.queryByText("Back")).toBeNull();
});

test("renders only back and next button on middle steps", () => {
  factory({ activeStep: 1, stepperModel: mockStepsModel });

  expect(screen.getByText("Next")).toBeVisible();
  expect(screen.getByText("Back")).toBeVisible();
  expect(screen.queryByText("Submit")).toBeNull();
});

test("renders only submit and back button on final step", () => {
  factory({ activeStep: 2, stepperModel: mockStepsModel });

  expect(screen.getByText("Submit")).toBeVisible();
  expect(screen.getByText("Back")).toBeVisible();
  expect(screen.queryByText("Next")).toBeNull();
});

test("fires next callback event on next button click", async () => {
  const user = userEvent.setup();
  const nextHandler = jest.fn();
  factory({ activeStep: 0, stepperModel: mockStepsModel, nextHandler });

  const nextButton = screen.getByText("Next");
  await user.click(nextButton);

  expect(nextHandler).toHaveBeenCalled();
});

test("fires back callback event on back button click", async () => {
  const user = userEvent.setup();
  const backHandler = jest.fn();
  factory({ activeStep: 1, stepperModel: mockStepsModel, backHandler });

  const backButton = screen.getByText("Back");
  await user.click(backButton);

  expect(backHandler).toHaveBeenCalled();
});

test("fires submit callback event on submit button click", async () => {
  const user = userEvent.setup();
  const submitHandler = jest.fn();
  factory({ activeStep: 2, stepperModel: mockStepsModel, submitHandler });

  const submitButton = screen.getByText("Submit");
  await user.click(submitButton);

  expect(submitHandler).toHaveBeenCalled();
});
