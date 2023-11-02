import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/layout/MainNavigation";
import classes from "./Layout.module.css";
const Layout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>
        <Outlet />
      </main>
    </Fragment>
  );
};
export default Layout;
