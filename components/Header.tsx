'use client';
import Container from './Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import { useState } from 'react';
import SearchInput from './SearchInput';
import Image from 'next/image';
import Link from 'next/link';

const pages = ['Home', 'Categories', 'Shop'];

function HideOnScroll(props: any) {
  const { children, window } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger} {...props}>
      {children}
    </Slide>
  );
}

export default function Header() {
  const iconClasses =
    'hover:text-secondary cursor-pointer ml-2 transition-colors duration-300';

  return (
    <header>
      <HideOnScroll>
        <AppBar color="transparent">
          <Container>
            <Toolbar disableGutters>
              <Box className="mr-6">
                <Link href="/">
                  <Image src="/logo.png" alt="logo" width={60} height={60} />
                </Link>
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                {pages.map(page => (
                  <Button key={page} className="hover:text-secondary">
                    {page}
                  </Button>
                ))}
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'flex' },
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <SearchInput />
                <FavoriteBorderOutlinedIcon className={iconClasses} />
                <ShoppingBagOutlinedIcon
                  className={`${iconClasses} hidden sm:block`}
                />
                <PersonOutlineOutlinedIcon
                  className={`${iconClasses} hidden sm:block`}
                />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </header>
  );
}
