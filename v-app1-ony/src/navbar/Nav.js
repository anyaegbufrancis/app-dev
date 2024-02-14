import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { HANDLE_OPEN_NAV, TOGGLE, HANDLE_OPEN_USER } from "../redux/actions"
import {useDispatch, useSelector } from "react-redux"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink, red } from '@mui/material/colors';



const Nav = () => {
  const toggled = useSelector((state) => state.changeState.toggled);
  const handleopennav = useSelector((state) => state.changeState.handleopennav)
  const handleopenuser = useSelector((state) => state.changeState.handleopenuser)
  const pagename = useSelector((state) => state.changeState.pagename)
  const dispatch = useDispatch()

  const pages = [ "Happy Valentine's Day, Beautiful" ];
  const settings = ['Profile', 'Pictures'];

  console.log(toggled, handleopennav, handleopenuser, pagename)

  function handleToggle () {
    dispatch({type: TOGGLE, payload: !toggled})
    console.log(toggled)
  }

  function handleOpenNavMenu () {
    dispatch({type: HANDLE_OPEN_NAV, payload: !handleopennav})
  }

  function handleOpenNavUser () {
    dispatch({type: HANDLE_OPEN_USER, payload: !handleopenuser})
  }

  function handleCloseNavMenu () {
    dispatch({type: HANDLE_OPEN_NAV, payload: !handleopennav})
  }

  function handleCloseNavUser () {
    dispatch({type: HANDLE_OPEN_USER, payload: !handleopenuser})
  }


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FavoriteIcon sx={{ fontSize: 50, color: red[800], display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: 40,
              letterSpacing: '.4rem',
              color: pink,
              textDecoration: 'none',
            }}
            
          >
            { pagename }
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={handleopennav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(handleopennav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" > {page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'red', display: 'block', fontSize: "2.5rem", fontweight: "bold", fontFamily: "monospace", ml: "5rem" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleCloseNavUser} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="../angel1.png" />
              </IconButton>
            </Tooltip> */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={handleopenuser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(handleopenuser)}
              onClose={handleOpenNavUser}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
