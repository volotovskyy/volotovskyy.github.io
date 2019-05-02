// vendor
import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";

// proj
import { Header, Footer } from "layouts";

// own
const useStyles = makeStyles(theme => ({
  layout: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
  },
  content: {
    marginTop: 48,
    display: "flex",
    flex: "1 1 100%",
    backgroundColor: theme.palette.background.default
  }
}));

export const Layout = props => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.content}>{props.children}</main>
      <Footer />
    </div>
  );
};
