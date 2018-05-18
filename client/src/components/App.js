import React from 'react';
import store from '../store';
import routes from '../routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {createMuiTheme} from 'material-ui/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#CFD8DC',
      main: '#272A36',
      dark: '#272A36',
      contrastText: '#fff',
    },
    secondary: {
      light: '#F44336',
      main: '#F44336',
      dark: '#F44336',
      contrastText: '#000',
    },
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          {routes}
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
};

export default App;
