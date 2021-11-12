import { FC } from 'react';

import Box from '@mui/material/Box';

const drawerWidth = 240;

const Main: FC = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: '#eaeef3',
        flexGrow: 1,
        p: 3,
        boxSizing: 'border-box',
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`
      }}
    >
      {children}
    </Box>
  );
};

export default Main;
