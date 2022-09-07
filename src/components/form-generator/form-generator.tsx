import { setField } from "../../store/application-form-slice";
import { RootState } from "../../store/store";
import { TextField } from "../text-field/text-field";

export const FieldType = { TEXT_FIELD: "text-field" } as const;

type FieldModel = {
  id: string;
  label: string;
  type: typeof FieldType[keyof typeof FieldType];
};

type FormGeneratorProps = {
  name: string;
  formModel: FieldModel[];
};

const FieldComponents = {
  [FieldType.TEXT_FIELD]: ({ id, label }: FieldModel) => {
    return (
      <TextField
        key={id}
        label={label}
        onChange={(event) =>
          setField({ key: id, value: event.currentTarget.value })
        }
        selector={(state: RootState) => state.applicationForm[id]}
      />
    );
  },
} as const;

export const FormGenerator = ({ name, formModel }: FormGeneratorProps) => {
  return (
    <form name={name}>
      {formModel.map((fieldModel) => {
        return FieldComponents[fieldModel.type](fieldModel);
      })}
    </form>
  );
};
