import Button from '@mui/material/Button';

interface Props {
  children: React.ReactNode;
  sx?: { [key: string]: string };
}

export default function CustomButton(props: Props) {
  return (
    <Button
      variant="contained"
      color="inherit"
      sx={{
        backgroundColor: {
          xs: 'secondary.main',
          md: 'whitesmoke',
        },
        ':hover': {
          backgroundColor: {
            xs: 'secondary.light',
            md: 'white',
          },
        },
      }}
    >
      {props.children}
    </Button>
  );
}
