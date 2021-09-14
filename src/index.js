import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

// responsive font wrap all contents
let theme = createTheme();
theme = responsiveFontSizes(theme);


ReactDOM.render(  
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


