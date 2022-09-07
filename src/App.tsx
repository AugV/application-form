import React from "react";
import { StepModel, Stepper } from "./components/stepper/stepper";
import {
  FieldType,
  FormGenerator,
} from "./components/form-generator/form-generator";

function App() {
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

  return (
    <>
      <Stepper
        activeStep={0}
        stepperModel={[firstStep]}
        backHandler={() => {}}
        nextHandler={() => {}}
        submitHandler={() => {}}
      />
    </>
  );
}

export default App;
