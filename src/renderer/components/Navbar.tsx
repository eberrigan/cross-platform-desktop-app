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

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
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
      <NavLink to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
        <IconButton>
          <Typography>Login</Typography>
        </IconButton>
      </NavLink>
    </>
  );
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Bloom Desktop
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
              <FaHamburger />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClick={() => toggleDrawer(false)}
            >
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
