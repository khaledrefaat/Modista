import Container from '../Container';
import Grid from '@mui/material/Unstable_Grid2';

export default function ModernCollection() {
  return (
    <section>
      <Container>
        <Grid container>
          <Grid container xs={12} md={6}>
            <Grid xs={12}>first</Grid>
            <Grid xs={12}>Second</Grid>
          </Grid>
          <Grid xs={12} md={6}>
            Third
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
