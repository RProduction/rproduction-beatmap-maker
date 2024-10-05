import React, {PropsWithChildren} from 'react';
import {Outlet} from 'react-router-dom';
import Box from '@mui/material/Box';

function BaseLayout() {
  
  return (
    <Box height="100%">
      <Outlet/>
    </Box>
  )
}

export default BaseLayout