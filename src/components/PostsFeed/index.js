// vendor
import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CommentMuIcon from "@material-ui/icons/Comment.js";
import StarRateMuIcon from "@material-ui/icons/StarRate.js";
import Paper from "@material-ui/core/Paper";
import { makeStyles, useTheme } from "@material-ui/styles";
import _ from "lodash";

// proj
import { Loader } from "commons";
import { PostsFeedLimitSelect, LoadMore } from "components";
import { useStateValue } from "state";
import { useFetch } from "utils/hooks";
import commentIcon from "styles/images/comment.png";
import archiveIcon from "styles/images/archive.png";

// own
const useStyles = makeStyles(theme => ({
  feedContainer: {
    margin: "24px auto",
    display: "block",
    overflow: "auto",
    height: "100%",
    padding: 24
  },
  list: {
    width: 480,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ddd"
  },
  link: {
    textDecoration: "none"
  },
  listItem: {
    cursor: "pointer",

    "&:hover": {
      background:
        "linear-gradient(45deg, rgb(32, 166, 243) 20%, rgb(32, 203, 243) 100%)"
    }
  },
  feedHeader: {
    display: "flex",
    alignItems: "center"
  },
  info: {
    display: "flex",
    justifyContent: "space-between"
  },
  avatar: {
    borderRadius: 0
  },
  feedFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 12
  },
  empty: {
    width: 480,
    border: "1px solid red",
    padding: 24
  }
}));

export const PostsFeed = props => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [{ limit, feedSearch, nextSubredditId }] = useStateValue();

  const [isLoading, fetchedData] = useFetch(
    `https://www.reddit.com/r/${feedSearch}.json?limit=${limit}${
      nextSubredditId ? `&after=${nextSubredditId}` : ""
    }`,
    [limit, feedSearch, nextSubredditId]
  );

  const feed = _.get(fetchedData, "data.children", []);

  const subredditId = _.get(fetchedData, "data.after", null);

  return isLoading ? (
    <Loader />
  ) : (
    <Paper className={classes.feedContainer} elevation={1}>
      <div className={classes.feedHeader}>
        You are looking for:&nbsp;
        <Typography variant="h4" color="textPrimary">
          {feedSearch}
        </Typography>
      </div>
      {fetchedData ? (
        <>
          <List className={classes.list}>
            {feed.map(({ data }, index) => (
              <Link className={classes.link} to={data.permalink} key={data.id}>
                <ListItem className={classes.listItem} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      className={classes.avatar}
                      alt="Post image"
                      src={
                        data.thumbnail === "self"
                          ? data.archived
                            ? archiveIcon
                            : commentIcon
                          : data.thumbnail
                      }
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={data.title}
                    secondary={
                      <span className={classes.info}>
                        <Typography
                          component="span"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Posted by {data.author}
                        </Typography>
                        <span>
                          <span>
                            <StarRateMuIcon /> {data.score}
                          </span>
                          <span>
                            <CommentMuIcon /> {data.num_comments}
                          </span>
                        </span>
                      </span>
                    }
                  />
                </ListItem>
                {feed.length > 1 && feed.length - 1 !== index ? (
                  <Divider light />
                ) : null}
              </Link>
            ))}
          </List>
          <div className={classes.feedFooter}>
            <PostsFeedLimitSelect />
            <LoadMore next={subredditId} />
          </div>
        </>
      ) : (
        <div className={classes.empty}>
          <div>There is nothing to show :(</div>
          <div>Try some other search query</div>
          <br />
          <i>(for example: reactjs, angular, vue, graphql)</i>
        </div>
      )}
    </Paper>
  );
};
