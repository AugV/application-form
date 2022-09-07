import { Typography } from "@mui/material";
import clsx from "clsx";
import { Button } from "../button/button";
import styles from "./stepper.module.scss";

export type StepModel = {
  heading: string;
  content: {
    component: (props: any) => JSX.Element;
    props: Record<string, unknown>;
  };
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
  const ContentComponent = currentStep.content.component;
  const contentProps = currentStep.content.props;
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === stepperModel.length - 1;

  return (
    <div className={styles.container}>
      <Typography variant="h5" component="h2">
        {currentStep.heading}
      </Typography>

      <section className={styles.contentContainer}>
        <ContentComponent {...contentProps} />

        <nav
          className={clsx({
            [styles.navigationContainer]: true,
            [styles.firstStep]: isFirstStep,
            [styles.isLastStep]: isLastStep,
          })}
        >
          {!isFirstStep && <Button onClick={backHandler}>Back</Button>}
          {isLastStep ? (
            <Button onClick={submitHandler}>Submit</Button>
          ) : (
            <Button onClick={nextHandler}>Next</Button>
          )}
        </nav>
      </section>
    </div>
  );
};
