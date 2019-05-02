// vendor
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

// proj
import { SubredditSearch } from "components";
import { POSTS_FEED } from "routes";
import logo from "styles/images/collabra-logo.png";

const useStyles = makeStyles({
  header: {
    position: "fixed",
    zIndex: "100",
    width: "100%",
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    padding: "0 30px"
  },
  space: {
    flexGrow: 1
  },
  controls: {
    display: "flex",
    flex: "0 1 auto"
  }
});

export const Header = props => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Link to={POSTS_FEED}>
        <img src={logo} alt="logo" />
      </Link>
      <div className={classes.space} />
      <div className={classes.controls}>
        <SubredditSearch />
      </div>
    </header>
  );
};
