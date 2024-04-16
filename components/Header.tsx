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
  const iconSX = {
    marginLeft: '10px',
    cursor: 'pointer',
    ':hover': { color: 'secondary.main' },
    transition: 'color 0.3s ease',
  };

  return (
    <header>
      <HideOnScroll>
        <AppBar color="primary">
          <Container>
            <Toolbar disableGutters>
              <Box className="mr-6">
                <Link href="/">
                  <Image src="/logo.png" alt="logo" width={60} height={60} />
                </Link>
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                {pages.map(page => (
                  <Button
                    key={page}
                    sx={{
                      color: 'whitesmoke',
                      ':hover': { color: 'secondary.main' },
                    }}
                  >
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
                <FavoriteBorderOutlinedIcon
                  sx={{ ...iconSX, display: { xs: 'none', md: 'block' } }}
                />
                <ShoppingBagOutlinedIcon sx={iconSX} />
                <PersonOutlineOutlinedIcon
                  sx={{ ...iconSX, display: { xs: 'none', md: 'block' } }}
                />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </header>
  );
}
