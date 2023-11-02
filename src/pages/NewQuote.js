import React, { Fragment } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { redirect, useActionData, useNavigation } from "react-router-dom";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const data = useActionData();
  const navigation = useNavigation();
  return (
    <Fragment>
      {data && data.status && <p className="centered">{data.message}</p>}
      <QuoteForm isLoading={navigation.state === "submitting"} />
    </Fragment>
  );
};
export async function action({ request }) {
  const formData = await request.formData();
  const newQuote = {
    author: formData.get("author"),
    text: formData.get("text"),
  };
  try {
    await addQuote(newQuote);
  } catch (err) {
    if (err.status === 422) {
      return err;
    }
    throw err;
  }
  return redirect("/quotes");
}

export default NewQuote;
