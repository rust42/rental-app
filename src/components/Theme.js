import { createTheme } from '@mui/material';

const palette = createTheme();

export const theme = createTheme({
  palette: {
    status: {
      danger: '#e53e3e',
    },
  
    text: {
      error: "#ff0000",
    },
    primary: {
      main: '#009750'
    },
    secondary: {
      main: '#1E90FF'
    }
  },
  typography: {
    fontFamily: 'Roboto'
  },
  shape: {
    borderRadius: 0
  },
  props: {
    MuiButton: {
      variant: 'contained',
      disableRipple: true,
      color: 'primary'
    },
    MuiTextField: {
      variant: 'outlined',
      InputLabelProps: {
        shrink: true
      }
    },
    MuiPaper: {
      elevation: 0
    }
  }
});
