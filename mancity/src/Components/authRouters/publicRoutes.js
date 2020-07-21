import React from "react";
import { Route, Redirect } from "react-router-dom";
const PublicRoutes = ({ user, component: Comp, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        //Comp equals to DAshboard
        rest.restricted ? (
          user ? ( //if user is auth
            <Redirect to="/dashboard" />
          ) : (
            <Comp {...props} user={user} />
          )
        ) : (
          <Comp {...props} user={user} />
        )
      }
    />
  );
};

export default PublicRoutes;
