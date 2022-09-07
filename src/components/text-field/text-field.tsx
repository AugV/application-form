import { TextField as MuiTextField } from "@mui/material";
import { PayloadAction } from "@reduxjs/toolkit";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

type TextFieldProps = {
  label: string;
  selector: (state: RootState) => string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => PayloadAction<{key: string, value: string}>;
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
  const dispatch = useDispatch();
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(onChange(event))
  }

  return <MuiTextField label={label} value={value} onChange={handleChange} fullWidth={true}/>;
};
