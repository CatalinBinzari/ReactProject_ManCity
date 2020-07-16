import React from "react";
import Header from "../Components/Header_footer/Header";
//compoents
const Layout = (props) => {
  return (
    <div>
      <Header /> {props.children} footer
    </div>
  );
};

export default Layout;
