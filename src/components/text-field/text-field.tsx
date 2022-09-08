import { TextField as MuiTextField } from "@mui/material";
import { PayloadAction } from "@reduxjs/toolkit";
import { ChangeEvent } from "react";

type TextFieldProps = {
  label: string;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement>
  ) => PayloadAction<{ key: string; value: string }>;
  errorMessage?: string;
};

/* Why not use MuiTextField directly? 
    We're doing this to decouple MUI from our app. 
    Why decouple? 
    Because 
    1) if there would be problems/breakingchanges with MuiTextField it would be centralised 
    2) easier to migrate 
*/
export const TextField = ({
  label,
  onChange,
  value,
  errorMessage,
}: TextFieldProps) => {

  return (
    <MuiTextField
      label={label}
      value={value}
      onChange={onChange}
      fullWidth={true}
      error={!!errorMessage}
      helperText={errorMessage}
    />
  );
};
