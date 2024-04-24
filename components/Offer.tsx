import Container from './Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';

export default function Offer() {
  return (
    <section>
      <Container>
        <Grid container sx={{ boxSizing: 'border-box' }}>
          <Grid sm={12} md={6} width={'100%'}>
            <Image
              src="/background-1.jpg"
              height={300}
              width={300}
              alt="limited offer"
              objectFit="fill"
              style={{ width: '100%', minHeight: '100%' }}
            />
          </Grid>
          <Grid sm={12} md={6} sx={{ backgroundColor: 'primary.main' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: {
                  lg: 'flex-start',
                  xs: 'center',
                },
                height: '100%',
                flexDirection: 'column',
                marginX: 5,
                marginY: 2,
                textAlign: {
                  xs: 'center',
                  lg: 'left',
                },
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: 'white', textAlign: 'center' }}
              >
                Limited Offer
              </Typography>
              <Typography
                variant="h4"
                color="white"
                fontWeight={600}
                my={2}
                sx={{ maxWidth: { sm: '70%', md: '100%' } }}
              >
                35% off only this friday and a get special gift
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'white',
                  color: 'primary.main',
                  textTransform: 'none',
                  marginBottom: 2,
                }}
              >
                Grab it now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
