import { Container as MuiContainer } from '@mui/material';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MuiContainer>{children}</MuiContainer>;
};

export default Container;
