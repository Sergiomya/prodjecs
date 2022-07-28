import React from 'react';
import { AppBar, Box, Toolbar} from '@mui/material';
import Nav from "./Nav"
import Drawer from './Drawer';



function Layout() {
 
 

  return (
    <Box>
      <AppBar sx={{ background:'linear-gradient(rgb(165, 209, 229), rgb(224, 183, 190))', position: 'fixed'}}>
        <Toolbar sx={{display:'flex', alignItems: 'end', justifyContent: 'flex-end'}}>
        <Nav/>
        </Toolbar>
      </AppBar>
        <Drawer/>
    </Box>
  );
}

export default Layout;