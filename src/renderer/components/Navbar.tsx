import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHamburger } from 'react-icons/fa';

export function Navbar() {
  const { drawerOpen, setDrawerOpen } = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const menuItems = (
    <>
      <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <IconButton>
          <Typography>Home</Typography>
        </IconButton>
      </NavLink>
      <NavLink
        to="/species-list"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <IconButton>
          <Typography>Species</Typography>
        </IconButton>
      </NavLink>
    </>
  );
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography>Bloom Desktop</Typography>
        {isMobile ? (
          <>
            <IconButton onClick={() => toggleDrawer(true)}>
              <FaHamburger />
            </IconButton>
            <Drawer open={drawerOpen} onClick={() => toggleDrawer(false)}>
              <List>
                <ListItem>{menuItems}</ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          menuItems
        )}
      </Toolbar>
    </AppBar>
  );
}
