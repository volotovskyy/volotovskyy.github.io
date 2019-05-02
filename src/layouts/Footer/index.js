// vendor
import React from "react";
import { makeStyles } from "@material-ui/styles";

// own
const useStyles = makeStyles({
  footer: {
    display: "flex",
    alignItems: "center",
    background: "rgb(238, 238, 238)",
    boxShadow: "#FAFAFA",
    height: 48,
    padding: "0 30px"
  }
});

export const Footer = () => {
  const classes = useStyles();

  return <div className={classes.footer}>Footer</div>;
};
