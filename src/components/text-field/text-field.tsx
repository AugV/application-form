import { TextField as MuiTextField } from "@mui/material";
import { ChangeEvent } from "react";

type TextFieldProps = {
  label: string;
  value?: string;
  onChange: (event: ChangeEvent) => void; 
};

/* Why not use MuiTextField directly? 
    We're doing this to decouple MUI from our app. 
    Why decouple? 
    Because 
    1) if there would be problems/breakingchanges with MuiTextField it would be centralised 
    2) easier to migrate 
*/
export const TextField = ({ label, value, onChange }: TextFieldProps) => {
  return <MuiTextField label={label} value={value} onChange={onChange} />;
};
