import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import theme from './theme';
import './index.css';

ReactDOM.render(
  <Router>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </Router>,
  document.getElementById("root")
);
