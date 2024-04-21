import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Container from '../Container';
import DUMMY_DATA from '../DUMMY_DATA';
import ProductCard from '../ProductCard';

export default function NewArrivals() {
  return (
    <section>
      <Container>
        <Typography variant="h4">New Arrivals</Typography>
        <Grid
          container
          gap={6}
          mb={5}
          sx={{
            justifyContent: { xs: 'center', lg: 'flex-start' },
          }}
        >
          {DUMMY_DATA.map(product => (
            <Grid xs={12} sm={4} md={4} lg={2.5} key={product.id}>
              <ProductCard key={product.id} product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
