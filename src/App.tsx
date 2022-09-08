import React, { useState } from "react";
import { StepModel, Stepper } from "./components/stepper/stepper";
import {
  FieldType,
  FormGenerator,
} from "./components/form-generator/form-generator";
import styles from "./App.module.scss";
import { Validation } from "./store/application-form-slice";
import { RootState } from "./store/store";
import { useSelector } from "react-redux";

const firstStep: StepModel = {
  heading: "Company",
  content: {
    component: FormGenerator,
    props: {
      name: "Company form",
      formModel: [
        {
          id: "company-code-field",
          label: "Company code",
          type: FieldType.TEXT_FIELD,
          validations: [Validation.REQUIRED],
        },
        {
          id: "company-name",
          label: "Company name",
          type: FieldType.TEXT_FIELD,
          validations: [Validation.REQUIRED],
        },
        {
          id: "country-of-registration",
          label: "Country of registration",
          type: FieldType.TEXT_FIELD,
        },
      ],
    },
  },
};

const secondStep: StepModel = {
  heading: "Contact person",
  content: {
    component: FormGenerator,
    props: {
      name: "Contact person",
      formModel: [
        {
          id: "name",
          label: "Name",
          type: FieldType.TEXT_FIELD,
          validations: [Validation.REQUIRED],
        },
        {
          id: "surname",
          label: "Surname",
          type: FieldType.TEXT_FIELD,
          validations: [Validation.REQUIRED],
        },
        {
          id: "job-title",
          label: "Job title",
          type: FieldType.TEXT_FIELD,
        },
        {
          id: "email-address",
          label: "E-mail address",
          type: FieldType.TEXT_FIELD,
        },
      ],
    },
  },
};

function App() {
  const steps = [firstStep, secondStep];
  const [activeStep, setActiveStep] = useState(0);
  const activeStepFormName = steps[activeStep].content.props.name;

  const hasValidationErrors = useSelector((state: RootState) => {
    return (
      state.applicationForm[activeStepFormName] &&
      Object.values(state.applicationForm[activeStepFormName]).find(
        (fieldState) => {
          return fieldState.errorMessage || fieldState.isInvalid;
        }
      )
    );
  });

  return (
    <main>
      <header>{/* TODO: add header */}</header>

      <aside>{/* TODO: add side step indicator */}</aside>

      <article className={styles.formSheet}>
        <Stepper
          activeStep={activeStep}
          preventNextStep={!!hasValidationErrors}
          stepperModel={steps}
          backHandler={() => setActiveStep((prev) => --prev)}
          nextHandler={() => setActiveStep((prev) => ++prev)}
          submitHandler={() => {
            // TODO: submit form
          }}
        />
      </article>
    </main>
  );
}

export default App;
