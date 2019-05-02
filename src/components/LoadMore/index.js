// vendor
import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";
import Button from "@material-ui/core/Button";

// proj
import { useStateValue, SET_NEXT_SUBREDDIT_ID } from "state";

// own
const useStyles = makeStyles({
  wrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    margin: 12
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
});

export const LoadMore = props => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const [, dispatch] = useStateValue();

  const _onLoad = () => {
    if (!loading) {
      setLoading(true);
      dispatch({ type: SET_NEXT_SUBREDDIT_ID, payload: props.next });
      setLoading(false);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        disabled={loading}
        onClick={() => _onLoad()}
      >
        Load more!
      </Button>
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
};
