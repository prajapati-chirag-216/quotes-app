import { Fragment } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { getSingleQuote } from "../lib/api";
// import LoadingSpinner from "../components/UI/LoadingSpinner";
// import { useNavigation } from "react-router-dom";

const Quotedetails = () => {
  const loadedQuote = useLoaderData();
  // const navigation = useNavigation();
  // This will never run because commonent is loaded when data is ready(dosen't go in pending state)
  // if (navigation.state === "loading") {
  //   <div className="centered">
  //     <LoadingSpinner />
  //   </div>;
  // }
  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Outlet />
    </Fragment>
  );
};
export function loader({ params }) {
  const quoteId = params.quoteId;
  return getSingleQuote(quoteId);
}
export default Quotedetails;
