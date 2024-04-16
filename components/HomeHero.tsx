'use client';

import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from './Container';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import CustomButton from './CustomButton';

const Section = styled('section')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    backgroundColor: alpha(theme.palette.primary.main, 0.3),
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
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
            flexDirection: {
              xs: 'column-reverse',
              md: 'row',
            },
            position: 'relative',
          }}
        >
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              position: {
                xs: 'absolute',
                md: 'relative',
              },
              top: '50%',
              textAlign: {
                xs: 'center',
                md: 'left',
              },
              color: {
                xs: 'whitesmoke',
                md: 'inherit',
              },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ textTransform: 'uppercase' }}
            >
              new arrived
            </Typography>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontWeight: 'bold', maxWidth: '450px' }}
            >
              Modern wearable cloth
            </Typography>
            <CustomButton>Shop Now</CustomButton>
          </Grid>
          <Grid item xs={12} lg={6} width={375} height={550}>
            <Image
              src="/hero.png"
              alt="hero"
              width={375}
              height={550}
              className="full"
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}
