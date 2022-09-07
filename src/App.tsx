import React, { useState } from "react";
import { StepModel, Stepper } from "./components/stepper/stepper";
import {
  FieldType,
  FormGenerator,
} from "./components/form-generator/form-generator";
import styles from "./App.module.scss";

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
        },
        {
          id: "company-name",
          label: "Company name",
          type: FieldType.TEXT_FIELD,
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
        },
        {
          id: "surname",
          label: "Surname",
          type: FieldType.TEXT_FIELD,
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
  const [activeStep, setActiveStep] = useState(0);

  return (
    <main>
      <head>{/* TODO: add header */}</head>

      <aside>{/* TODO: add side step indicator */}</aside>

      <article className={styles.formSheet}>
        <Stepper
          activeStep={activeStep}
          stepperModel={[firstStep, secondStep]}
          backHandler={() => setActiveStep((prev) => --prev)}
          nextHandler={() => setActiveStep((prev) => ++prev)}
          submitHandler={() => {}}
        />
      </article>
    </main>
  );
}

export default App;
