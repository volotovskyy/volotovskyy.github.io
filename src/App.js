// vendor
import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// proj
import { StateProvider, initialState, rootReducer } from "state";
import { Routes } from "routes/Public";

// own
const browserHistory = createBrowserHistory();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

function App() {
  return (
    <StateProvider initialState={initialState} reducer={rootReducer}>
      <ThemeProvider theme={theme}>
        <>
          <CssBaseline />
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </>
      </ThemeProvider>
    </StateProvider>
  );
}

export default App;
