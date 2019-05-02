import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

const LoaderComponent = ({ classes }) => (
  <CircularProgress className={classes.progress} />
);

export const Loader = withStyles(styles)(LoaderComponent);
