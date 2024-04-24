import Container from '../Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ModernCollectionCard from './ModernCollectionCard';

export default function ModernCollection() {
  return (
    <section>
      <Container sx={{ marginY: '3rem' }}>
        <Box
          sx={{
            marginBottom: '2rem',
            marginLeft: {
              lg: '7rem',
              md: '1rem',
              xs: '0',
            },
            textAlign: {
              sm: 'left',
              xs: 'center',
            },
          }}
        >
          <Typography variant="caption" sx={{ textTransform: 'uppercase' }}>
            save up to 40%
          </Typography>
          <Typography variant="h4">2024 Modern collection</Typography>
        </Box>
        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
          <Grid xs={12} sm={5} md={5}>
            <ModernCollectionCard
              imgSrc="/collection-1.png"
              alt="collection"
              mb={3}
              height={275}
            />
            <ModernCollectionCard
              imgSrc="/collection-9.png"
              alt="collection"
              height={275}
            />
          </Grid>
          <Grid xs={12} sm={7} md={6}>
            <ModernCollectionCard
              imgSrc="/collection-3.png"
              alt="collection"
              height={550 + 24}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
