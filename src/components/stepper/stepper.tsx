type StepModel = {
  heading: string;
};

type StepperProps = {
  activeStep: number;
  nextHandler: () => void;
  backHandler: () => void;
  submitHandler: () => void;
  stepperModel: StepModel[];
};

export const Stepper = ({
  activeStep,
  nextHandler,
  backHandler,
  submitHandler,
  stepperModel,
}: StepperProps) => {
  const currentStep = stepperModel[activeStep];
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === stepperModel.length - 1;

  return (
    <>
      {/* TODO: extract heading */}
      <h2>{currentStep.heading}</h2>
      {/* TODO: extract buttons */}
      {!isFirstStep && <button onClick={backHandler}>Back</button>}
      {isLastStep ? (
        <button onClick={submitHandler}>Submit</button>
      ) : (
        <button onClick={nextHandler}>Next</button>
      )}
    </>
  );
};
