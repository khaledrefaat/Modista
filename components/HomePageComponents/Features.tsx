import Container from '../Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import FlightLandOutlinedIcon from '@mui/icons-material/FlightLandOutlined';

const features = [
  {
    icon: <MonetizationOnOutlinedIcon />,
    title: 'Original Products',
    description:
      'We provide money back guarantee if the product is not original',
    id: 9,
  },
  {
    icon: <SentimentSatisfiedAltOutlinedIcon />,
    title: 'Satisfaction Guarantee',
    description:
      "Exchange the product you've purchased if it dose'nt fit on you",
    id: 31,
  },
  {
    icon: <FlightLandOutlinedIcon />,
    title: 'New Arrival Everyday',
    description: 'We Update our collection everyday',
    id: 34,
  },
  {
    icon: <LocalShippingOutlinedIcon />,
    title: 'Fast & Free Shipping',
    description: 'We offer our fast and free shipping for our loyal customers',
    id: 83,
  },
];

function FeaturesBox(props: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Grid
      xs={12}
      sm={6}
      md={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: {
          lg: 0,
          xs: 6,
        },
        textAlign: 'center',
      }}
    >
      <Button
        variant="contained"
        color={'inherit'}
        sx={{
          backgroundColor: 'var(--light-gray)',
          border: 'none',
          outline: 'none',
        }}
      >
        {props.icon}
      </Button>
      <Typography mt={2} color="primary" variant="h6" fontWeight={600}>
        {props.title}
      </Typography>
      <Typography variant="body1" maxWidth="300px">
        {props.description}
      </Typography>
    </Grid>
  );
}

export default function Features() {
  return (
    <section>
      <Container sx={{ marginY: '5rem' }}>
        <Typography
          variant="h4"
          maxWidth="400px"
          fontWeight={600}
          sx={{
            marginX: 'auto',
            textAlign: 'center',
          }}
        >
          We Provide best customer experience
        </Typography>
        <Grid container mt={5} spacing={4} justifyContent="center">
          {features.map(feature => (
            <FeaturesBox key={feature.id} {...feature} />
          ))}
        </Grid>
      </Container>
    </section>
  );
}
