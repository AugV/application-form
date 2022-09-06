import { render, screen } from "@testing-library/react";
import React from "react";
import { Stepper } from "./stepper";

const factory = (props: React.ComponentProps<typeof Stepper>) =>
  render(<Stepper {...props} />);

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
