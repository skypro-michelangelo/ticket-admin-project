import { FC } from 'react';

import Divider from '@mui/material/Divider/Divider';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}));

const SideBar: FC = ({ children }) => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        backgroundColor: '#252733',
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          alignContent: 'flex-start',
          backgroundColor: '#252733',
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
    >
      <DrawerHeader sx={{ justifyContent: 'flex-start', color: '#A4A6B3' }}>
        <Typography variant="h6" noWrap component="div">
          SkyTicket
        </Typography>
      </DrawerHeader>
      <Divider /> {children}
    </Drawer>
  );
};

export default SideBar;
