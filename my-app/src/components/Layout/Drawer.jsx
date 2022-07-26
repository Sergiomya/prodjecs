import React from 'react';
import { Box, Drawer, Typography } from '@mui/material';
import Nav from './Nav';



function DrawerAppBar(props) {
const Drawer = () => {
    const drawerWidth = 240;
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer  = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
        </Typography>
          <Nav/>
      </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
        <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {Drawer}
        </Drawer>
      </Box>
    )
};
};

export default Drawer;