import QuoteList from "../components/quotes/QuoteList";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";

const AllQuotes = () => {
  const loaderData = useLoaderData();

  return (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      <Await
        resolve={loaderData.quotes}
        errorElement={
          <p className="centered">Error while loading Blog Post!</p>
        }
      >
        {(loadedQuotes) =>
          !loadedQuotes || loadedQuotes.length === 0 ? (
            <NoQuotesFound />
          ) : (
            <QuoteList quotes={loadedQuotes} />
          )
        }
      </Await>
    </Suspense>
  );
};
export async function loader() {
  return defer({ quotes: getAllQuotes() });
}
export default AllQuotes;
