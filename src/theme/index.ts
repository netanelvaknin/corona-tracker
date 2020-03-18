import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#2196f3",
      dark: '#303030',
      light: '#fff'
    },
    secondary: {
      main: "#fff",
      dark: 'rgba(0, 0, 0, 0.26)',
      light: 'rgba(255, 255, 255, 0.7)'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Rubik',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    htmlFontSize: 10
  },
  overrides: {
    MuiBottomNavigation: {
      root: {
        height: "10rem"
      }
    }, 
  }
});

export default theme;