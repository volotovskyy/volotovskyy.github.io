/*
--- declaring routes via object notation
*/
// export const book = Object.freeze({
//   postsFeed: "/",
//   post: "/post",
//   postId: "/post/:id",

//   exception: "/exception",
//   exceptionStatusCode: "/exception/:statusCode"
// });

/*
--- or similar to action types
*/
export const POSTS_FEED = "/";
export const POST = "/:permalink";

export const EXCEPTION = "/exception";
export const EXCEPTION_STATUS_CODE = "/exception/:statusCode";
