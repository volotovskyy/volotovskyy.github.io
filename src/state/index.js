import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

// --- //
export const FETCH_POSTS = "FETCH_POSTS";
export const SET_FEED_LIMIT = "SET_FEED_LIMIT";
export const SET_FEED_SEARCH = "SET_FEED_SEARCH";
export const SET_NEXT_SUBREDDIT_ID = "SET_NEXT_SUBREDDIT_ID";

export const initialState = {
  posts: [],
  feedSearch: "reactjs",
  limit: 10,
  nextSubredditId: null
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: [...action.payload]
      };

    case SET_FEED_LIMIT:
      return {
        ...state,
        limit: action.payload
      };

    case SET_FEED_SEARCH:
      return {
        ...state,
        feedSearch: action.payload
      };

    case SET_NEXT_SUBREDDIT_ID:
      return {
        ...state,
        nextSubredditId: action.payload
      };

    default:
      return state;
  }
};
