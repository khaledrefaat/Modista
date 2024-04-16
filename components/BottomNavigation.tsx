'use client';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonOutlineIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import WidgetsIcon from '@mui/icons-material/Widgets';
import StorefrontIcon from '@mui/icons-material/Store';

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
            '& .MuiBottomNavigationAction-root': {
              color: 'whitesmoke',
            },
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
            icon={<HomeIcon />}
            className=""
          />
          <BottomNavigationAction label="Categories" icon={<WidgetsIcon />} />
          <BottomNavigationAction label="Store" icon={<StorefrontIcon />} />
          <BottomNavigationAction
            label="My Account"
            icon={<PersonOutlineIcon />}
          />
          <BottomNavigationAction label="Cart" icon={<ShoppingBagIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
