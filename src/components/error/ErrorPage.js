import { Fragment } from "react";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../layout/MainNavigation";
import classes from "./ErrorPage.module.css";
const Error = () => {
  const error = useRouteError();
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>
        <h1>An Error occurred!</h1>
        <p>{error.message}</p>
      </main>
    </Fragment>
  );
};
export default Error;
