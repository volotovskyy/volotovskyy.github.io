// vendor
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchMuIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

// proj
import { useStateValue, SET_FEED_SEARCH } from "state";

// own
const useStyles = makeStyles(theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
}));

export const SubredditSearch = () => {
  const classes = useStyles();

  const [, dispatch] = useStateValue();

  const _handleSearch = event => {
    if (event.key === "Enter") {
      dispatch({ type: SET_FEED_SEARCH, payload: event.target.value });
    }
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchMuIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        // onChange={event => _handleSearch(event)}
        onKeyDown={event => _handleSearch(event)}
      />
    </div>
  );
};
