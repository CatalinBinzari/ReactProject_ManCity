import React from "react";
import Routes from "../../routes";
import { Route, Redirect } from "react-router-dom";
const PrivateRoutes = ({ user, component: Comp, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        //Comp equals to DAshboard
        user ? <Comp {...props} user={user} /> : <Redirect to="/sign_in/" />
      }
    />
  );
  //rest is everything what is not compoonent and is not the user
};

export default PrivateRoutes;
