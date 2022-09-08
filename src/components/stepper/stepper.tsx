import { Typography } from "@mui/material";
import clsx from "clsx";
import { Button } from "../button/button";
import styles from "./stepper.module.scss";

export type StepModel = {
  heading: string;
  content: {
    component: (props: any) => JSX.Element;
    props: Record<string, any>;
  };
};

type StepperProps = {
  activeStep: number;
  nextHandler: () => void;
  preventNextStep?: boolean;
  backHandler: () => void;
  submitHandler: () => void;
  stepperModel: StepModel[];
};

export const Stepper = ({
  activeStep,
  nextHandler,
  preventNextStep,
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
            <Button onClick={submitHandler} disabled={preventNextStep}>Submit</Button>
          ) : (
            <Button onClick={nextHandler} disabled={preventNextStep}>Next</Button>
          )}
        </nav>
      </section>
    </div>
  );
};
