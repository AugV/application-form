import { TextField } from "../text-field/text-field";

export const FieldType = { TEXT_FIELD: "text-field" } as const;

type FieldModel = {
  id: string;
  label: string;
  type: typeof FieldType[keyof typeof FieldType];
  setField: (fieldId: string, fieldValue: string) => void;
  getField: (fieldId: string) => string;
};

type FormGeneratorProps = {
  name: string;
  formModel: FieldModel[];
};

const FieldComponents = {
  [FieldType.TEXT_FIELD]: ({ id, label, setField, getField }: FieldModel) => (
    <TextField
      key={id}
      label={label}
      onChange={(event) => setField(id, event.currentTarget.value)}
      value={getField(id)}
    />
  ),
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
