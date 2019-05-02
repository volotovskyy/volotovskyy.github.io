// vendor
import React from "react";
import ArrowUpwardMuIcon from "@material-ui/icons/ArrowUpward.js";
import ArrowDownwardMuIcon from "@material-ui/icons/ArrowDownward.js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  vote: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  nestedReplyLine: {
    // height: "100%",
    position: "absolute",
    top: "65px",
    width: "2px",
    // height: "100vh",
    height: "calc(100% - 64px)",
    background: "#FF8E53"
  }
});
export const VoteForEntry = ({ score, nestedReply }) => {
  const classes = useStyles();
  return (
    <div className={classes.vote}>
      <ArrowUpwardMuIcon />
      {score ? score : null}
      <ArrowDownwardMuIcon />
      {nestedReply ? <div className={classes.nestedReplyLine} /> : null}
    </div>
  );
};
