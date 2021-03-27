import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      // light: '#757ce8',
      // dark: '#002884',
      main: '#ED842B',
      contrastText: '#fff',
    },
    secondary: {
      // light: '#ff7961',
      // dark: '#ba000d',
      main: '#D63B31',
      contrastText: '#000',
    },
    typography: {
        fontFamily: "Roboto",
    },
    shape: {
        borderRadius: 40
    },
    spacing: 20
  },
});
