import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link'

/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

const root = css({
  backgroundColor: 'var(--white-background)',
  transform: 'translateZ(0)',
  position: 'relative',
  counterReset: 'nav-item',
  '& a': {
    fontSize: '0.9rem',
    lineHeight: '2.2rem',
  },
  '& span': {
    marginRight: '10px'
  }
})
const icon = css({
  color: 'var(--main-purple)',
})
const navLink = css({
  minWidth: '130px',
  position: 'relative',
  display: 'inline-block',
  textDecoration: 'none',
  textDecorationSkipInk: 'auto',
  textTransform: 'capitalize',
  color: 'var(--body-purple)',
  transition: 'var(all 0.25s cubic-bezier(0.645,0.045,0.355,1))',
  '&::before': {
    color: 'var(--main-purple)',
    position: 'relative',
    bottom: '0',
    counterIncrement: 'nav-item',
    content: "'0' counter(nav-item) '.'",
    marginRight: '10px',
    fontSize: '13px',
    fontWeight: '400',
  }
})
const mobileNavMenuItem = css({
  minWidth: '130px',
  position: 'relative',
  display: 'inline-block',
  textDecoration: 'none',
  textDecorationSkipInk: 'auto',
  textTransform: 'capitalize',
  color: 'var(--body-purple)',
  transition: 'var(all 0.25s cubic-bezier(0.645,0.045,0.355,1))',
  // counterIncrement: 'mobile-nav-item',
  '&::before': {
    color: 'var(--main-purple)',
    position: 'relative',
    bottom: '0',
    // content: "'0' counter(mobile-nav-item) '.'",
    marginRight: '10px',
    fontSize: '13px',
    fontWeight: '400',
  },
  '&: hover': {
    color: 'var(--main-purple)'
  }
})
const navMenuItem = css({
  padding: '0px'
})

export const ResponsiveAppBar = ({navData}) => {

  const navMenu = navData.map(({
    ID,
    title,
    url,
  }) => ({ ID, title, url }))

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" css={root}>
      <Container maxWidth="false">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            noWrap
            sx={{ flexGrow: 1, justifyContent: 'flex-start',  mr: 2, display: 'flex', color: '#4831D4' }}
          >
          LOGO
          </Typography>

          <Box sx={{ flexGrow: 2, justifyContent: 'flex-end', display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              css={icon}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navMenu.map(({ID, title, url} = navMenu) => (
                <MenuItem key={ID} onClick={handleCloseNavMenu}>              
                  <Typography>
                    <Link
                      href={url}
                      css={mobileNavMenuItem}
                      color='inherit'
                      underline='none'>
                      {title}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {navMenu.map(({ID, title, url} = navMenu) => (
              <MenuItem key={ID} css={navMenuItem} onClick={handleCloseNavMenu}>              
                  <Typography>
                  <Link
                    href={url}
                    color='inherit'
                    css={navLink}
                    underline='none'>
                    {title}</Link>
                  </Typography>
              </MenuItem>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar