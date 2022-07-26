import React from 'react';
import { AppBar, Box, Toolbar} from '@mui/material';
import Nav from "./Nav"
import Drawer from './Drawer';


function Layout() {
 
 

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ backgroundColor: 'transparent', position: 'fixed'}}>
        <Toolbar>
        <Nav/>
        </Toolbar>
      </AppBar>
        <Drawer/>
    </Box>
  );
}

export default Layout;