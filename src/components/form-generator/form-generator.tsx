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
  [FieldType.TEXT_FIELD]: ({ id, label }: FieldModel) => (
    // TODO: provide callback to mutate store and value from the store
    <TextField key={id} label={label} onChange={() => {}} />
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
