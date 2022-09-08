import { Validation } from "../../store/application-form-slice";
import { Field } from "../field/field";
import { TextField } from "../text-field/text-field";
import styles from "./form-generator.module.scss";

export const FieldType = { TEXT_FIELD: "text-field" } as const;

type FieldModel = {
  id: string;
  label: string;
  validations?: [typeof Validation[keyof typeof Validation]];
  type: typeof FieldType[keyof typeof FieldType];
};

type FormGeneratorProps = {
  name: string;
  formModel: FieldModel[];
};

const FieldComponentMap = {
  [FieldType.TEXT_FIELD]: TextField,
} as const;

export const FormGenerator = ({ name, formModel }: FormGeneratorProps) => {
  return (
    <form name={name}>
      {formModel.map((fieldModel) => (
        <div className={styles.fieldContainer} key={fieldModel.id}>
          <Field
            formId={name}
            fieldId={fieldModel.id}
            validations={fieldModel.validations}
            inputProps={fieldModel}
            component={FieldComponentMap[fieldModel.type]}
          />
        </div>
      ))}
    </form>
  );
};
