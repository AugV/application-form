import { TextField as MuiTextField } from "@mui/material";
import { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

type TextFieldProps = {
  label: string;
  selector: (state: RootState) => string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
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
  selector,
}: TextFieldProps) => {
  // Too coupled to redux, I don't like it, but didn't want to trigger re-render high up and have to inject the value somehow
  const value = useSelector(selector);
  return <MuiTextField label={label} value={value} onChange={onChange} />;
};
