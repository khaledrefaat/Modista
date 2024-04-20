import Button from '@mui/material/Button';

interface Props {
  children: React.ReactNode;
  sx?: { [key: string]: string | number };
  sticky?: boolean;
}

export default function CustomButton(props: Props) {
  return (
    <Button
      variant="contained"
      color="inherit"
      sx={{
        backgroundColor: {
          xs: props.sticky ? 'whitesmoke' : 'secondary.main',
          sm: 'whitesmoke',
        },
        ':hover': {
          backgroundColor: {
            xs: props.sticky ? 'white' : 'secondary.light',
            sm: 'white',
          },
        },
        position: props.sticky ? 'absolute' : 'relative',
        left: props.sticky ? '10%' : 'unset',
        bottom: props.sticky ? '10%' : 'unset',
        right: {
          sm: 'unset',
          xs: props.sticky ? '10%' : 'unset',
        },
      }}
    >
      {props.children}
    </Button>
  );
}
