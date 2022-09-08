import { Button as MuiButton } from "@mui/material";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
};

export const Button = ({ onClick, children, disabled }: ButtonProps) => {
  return <MuiButton onClick={onClick} variant="outlined" disabled={disabled}>{children}</MuiButton>;
};
