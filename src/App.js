import {
  RouterProvider,
  Route,
  Navigate,
  Link,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./pages/Layout";
import AllQuotes, { loader as quotesLoader } from "./pages/AllQuotes";
import NewQuote, { action as newQuoteAction } from "./pages/NewQuote";
import QuoteDetails, {
  loader as quoteDetailsLoader,
} from "./pages/QuoteDetails";
import NotFound from "./pages/NotFound";
import Comments from "./components/comments/Comments";
import ErrorPage from "./components/error/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Navigate to="/quotes" />} />
      <Route path="/quotes/*" element={<AllQuotes />} loader={quotesLoader} />
      <Route
        path="/quotes/:quoteId/*"
        element={<QuoteDetails />}
        loader={quoteDetailsLoader}
      >
        <Route
          path=""
          element={
            <div className="centered">
              <Link className="btn--flat" to="comments">
                Comments
              </Link>
            </div>
          }
        />
        <Route path="comments" element={<Comments />} />
      </Route>
      <Route path="/new-quote" element={<NewQuote />} action={newQuoteAction} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
