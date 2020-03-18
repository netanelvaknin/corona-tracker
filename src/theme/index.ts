import { createMuiTheme } from "@material-ui/core/styles";
// import RubikRegularFont from '../assets/fonts/Rubik-Regular.ttf';
// import RubikBold from '../assets/fonts/Rubik-Bold.ttf';

// const RubikRegular = {
//   fontFamily: 'rubik-regular',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 400,
//   src: `
//     local('Rubik'),
//     local('Rubik-Regular'),
//     url(${RubikRegularFont}) format('ttf')
//   `,
// };

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
      dark: '#424242',
      light: 'rgba(255, 255, 255, 0.7)'
    }
  },
  typography: {
    htmlFontSize: 10
  },
  overrides: {
    MuiBottomNavigation: {
      root: {
        height: "10rem"
      }
    }
  }
});

export default theme;