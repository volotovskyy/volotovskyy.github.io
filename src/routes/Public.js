// vendor
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// proj
import { PostsFeedPage, PostPage, ExceptionPage } from "pages";

import * as ROUTES from "./index.js";

export const Routes = () => {
  return (
    <Switch>
      <Route exact component={PostsFeedPage} path={ROUTES.POSTS_FEED} />
      <Route component={PostPage} path={ROUTES.POST} />
      <Route component={ExceptionPage} path={ROUTES.EXCEPTION_STATUS_CODE} />
      <Redirect to={`${ROUTES.EXCEPTION}/404`} />
    </Switch>
  );
};
