import { Container as MuiContainer } from '@mui/material';

const Container: React.FC<{
  children: React.ReactNode;
  sx?: { [key: string]: string };
  noMargin?: boolean;
}> = ({ children, sx, noMargin }) => {
  return (
    <MuiContainer
      maxWidth={false}
      sx={{
        ...sx,
        padding: {
          xs: '0 1rem',
          sm: '0 2rem',
          md: '0 3rem',
          lg: '0 4rem',
          xl: '0 5rem',
        },
        marginY: noMargin ? 0 : '5rem',
      }}
    >
      {children}
    </MuiContainer>
  );
};

export default Container;
