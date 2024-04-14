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
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const iconClasses =
    'hover:text-secondary cursor-pointer ml-2 transition-colors duration-300';

  return (
    <header>
      <HideOnScroll>
        <AppBar
          color="transparent"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          <Container>
            <Toolbar>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
                {pages.map(page => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    className="hover:text-secondary"
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
                }}
              >
                <SearchInput />
                <FavoriteBorderOutlinedIcon className={iconClasses} />
                <ShoppingBagOutlinedIcon className={iconClasses} />
                <PersonOutlineOutlinedIcon className={iconClasses} />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </header>
  );
}
