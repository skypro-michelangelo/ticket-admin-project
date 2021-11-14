import { FC } from 'react';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar/AppBar';

const drawerWidth = 240;

const ToolBar: FC = ({ children }) => {
  return (
    <AppBar
      position="relative"
      sx={{
        boxShadow: 'none',
        color: '#000',
        backgroundColor: '#eaeef3',
        display: 'flex',
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`
      }}
    >
      <Toolbar>
        <Typography variant="h4" noWrap component="div">
          {children}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ToolBar;
