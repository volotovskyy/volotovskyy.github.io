// vendor
import React from "react";
import { withRouter } from "react-router";
import { makeStyles, useTheme } from "@material-ui/styles";
import CommentMuIcon from "@material-ui/icons/Comment.js";
import _ from "lodash";

// proj
import { Loader, VoteForEntry } from "commons";
import { useFetch } from "utils/hooks";
import archiveIcon from "styles/images/archive.png";

// own
import { PostReplies } from "./PostReplies";

const useStyles = makeStyles(theme => ({
  postContainer: {
    margin: "24px auto",
    display: "block",
    overflow: "auto",
    height: "100%",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ddd",
    maxWidth: "900px"
  },
  post: {
    padding: "12px",
    display: "flex",
    border: "2px solid rgb(32, 166, 243)"
  },
  postContent: {
    flex: 1
  },
  title: {
    margin: "12px 0"
  },
  author: {
    color: "rgb(32, 166, 243)"
  },
  text: {
    marginBottom: 12
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    color: "#FE6B8B"
  }
}));

const PostComponent = props => {
  const permalink = props.location.pathname;

  const theme = useTheme();
  const classes = useStyles(theme);

  const [isLoading, fetchedData] = useFetch(
    `https://www.reddit.com${permalink}.json`,
    []
  );

  const post = _.get(fetchedData, "[0].data.children[0].data", {});
  const replies = _.get(fetchedData, "[1].data.children", []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={classes.postContainer}>
      <div className={classes.post}>
        <VoteForEntry score={post.ups} />
        <div className={classes.postContent}>
          <div>
            Posted by <span className={classes.author}>{post.author}</span>
            {post.archived ? (
              <img
                style={{ heigth: "16px", width: "16px" }}
                alt="archived"
                src={archiveIcon}
              />
            ) : null}
          </div>
          <h3 className={classes.title}>{post.title}</h3>
          <div
            className={classes.text}
            dangerouslySetInnerHTML={{ __html: post.selftext }}
          />
          <div className={classes.footer}>
            <div>
              <CommentMuIcon />
              {post.num_comments}
            </div>
            {post.upvote_ratio ? (
              <div>{post.upvote_ratio * 100}% Upvoted</div>
            ) : null}
          </div>
        </div>
      </div>
      <PostReplies replies={replies} />
    </div>
  );
};

export const Post = withRouter(PostComponent);
