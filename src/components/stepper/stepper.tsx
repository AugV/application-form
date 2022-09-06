type StepModel = {
  heading: string;
};

type StepperProps = {
  activeStep: number;
  stepperModel: StepModel[];
};

export const Stepper = ({ activeStep, stepperModel }: StepperProps) => {
  const currentStep = stepperModel[activeStep];
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === stepperModel.length - 1;

  return (
    <>
      {/* TODO: extract heading */}
      <h2>{currentStep.heading}</h2>
      {/* TODO: extract buttons */}
      {!isFirstStep && <button>Back</button>}
      {isLastStep ? <button>Submit</button> : <button>Next</button>}
    </>
  );
};
