'use client';

import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from './Container';
import { styled, alpha } from '@mui/material/styles';

const Section = styled('section')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  padding: theme.spacing(2, 0, 0, 0),
  marginTop: theme.spacing(8),
}));

export default function HomeHero() {
  return (
    <Section>
      <Container>
        <Grid
          sx={{
            display: { xs: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ textTransform: 'uppercase' }}
            >
              new arrived
            </Typography>
            <Typography variant="h1" gutterBottom>
              Modern wearable cloth
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} width={300} height={550}>
            <Image
              src="/hero-1.png"
              alt="hero"
              width={300}
              height={550}
              className="full"
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}
