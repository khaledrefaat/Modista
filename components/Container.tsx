import { Container as MuiContainer } from '@mui/material';

const Container: React.FC<{
  children: React.ReactNode;
  sx?: { [key: string]: string };
}> = ({ children, sx }) => {
  return <MuiContainer sx={sx}>{children}</MuiContainer>;
};

export default Container;
