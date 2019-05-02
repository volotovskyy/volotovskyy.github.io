// vendor
import React from "react";
import { makeStyles } from "@material-ui/styles";
import StarRateMuIcon from "@material-ui/icons/StarRate.js";
import _ from "lodash";

// proj
import { VoteForEntry } from "commons";
import { styledBy } from "utils";

// own
const useStyles = makeStyles({
  repliesContainer: {
    padding: "12px"
  },
  reply: {
    position: "relative",
    padding: "12px",
    display: "flex",
    // color: props => console.log("checking stylesprops", props),
    // TODO: dynamic depth? to infinity?
    paddingLeft: styledBy("depth", {
      depth0: "0px",
      depth1: "38px",
      depth2: "76px",
      depth3: "114px",
      depth4: "152px",
      depth5: "190px"
    })
  },
  parentReply: {
    background: "#FAFAFA",
    overflow: "hidden"
  },
  replyContent: {},
  author: {
    color: "rgb(32, 166, 243)"
  },
  scoreIcon: {
    color: "#FF8E53"
  },
  title: {
    display: "flex",
    alignItems: "center"
  }
});

const Reply = props => {
  const { reply } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.reply} key={String(reply.id)}>
      <VoteForEntry nestedReply={!_.isEmpty(reply.replies)} />
      <div className={classes.replyContent}>
        <div className={classes.title}>
          <span className={classes.author}>{reply.author}</span>{" "}
          <StarRateMuIcon className={classes.scoreIcon} />
          {reply.score}
        </div>
        <div>{reply.body}</div>
      </div>
    </div>
  );
};

export const PostReplies = ({ replies }) => {
  const classes = useStyles();

  const loop = replies =>
    replies.map(({ data }) => {
      const childReplies = _.get(data, "replies.data.children");

      if (!_.isEmpty(childReplies)) {
        return (
          <div className={classes.parentReply} key={String(data.id)}>
            <Reply reply={data} depth={`depth${data.depth}`} />
            {loop(childReplies)}
          </div>
        );
      }

      return (
        <Reply
          reply={data}
          key={String(data.id)}
          depth={`depth${data.depth}`}
        />
      );
    });

  return <div className={classes.repliesContainer}>{loop(replies)}</div>;
};
