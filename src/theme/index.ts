import * as React from 'react';
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
    palette: {
      primary: {
        main: '#ff6e14',
        contrastText: 'white',
      },
    },
  })

export default customTheme;
