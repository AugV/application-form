import { TextField as MuiTextField } from "@mui/material";

type TextFieldProps = {
    label: string;
};

export const TextField = ({ label }: TextFieldProps) => {
  return <MuiTextField label={label} />;
};
