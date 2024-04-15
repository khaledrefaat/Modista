'use client';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

export default function FixedBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        pb: 7,
        display: { xs: 'block', sm: 'none' },
      }}
    >
      <CssBaseline />
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            '& .Mui-selected': {
              color: 'secondary.main',
            },
            '& .Mui-selected svg': {
              color: 'secondary.main',
            },
            backgroundColor: 'primary.main',
            color: 'white',
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeOutlinedIcon />}
            className=""
          />
          <BottomNavigationAction
            label="Categories"
            icon={<WidgetsOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Store"
            icon={<StorefrontOutlinedIcon />}
          />
          <BottomNavigationAction
            label="My Account"
            icon={<PersonOutlineOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Cart"
            icon={<ShoppingBagOutlinedIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
