import { Button as MuiButton } from "@mui/material";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button = ({ onClick, children }: ButtonProps) => {
  return <MuiButton onClick={onClick} variant="outlined">{children}</MuiButton>;
};
