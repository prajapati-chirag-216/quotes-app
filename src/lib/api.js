import axios from "axios";
const FIREBASE_DOMAIN = "https://quotes-f486f-default-rtdb.firebaseio.com";

export async function getAllQuotes() {
  const response = await axios.get(`${FIREBASE_DOMAIN}/quotes.json`);
  const data = response.data;
  if (response.statusText !== "OK") {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }
  return transformedQuotes;
}

export async function getSingleQuote(quoteId) {
  const response = await axios.get(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
  const data = response.data;

  if (response.statusText !== "OK") {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
}

export async function addQuote(quoteData) {
  if (quoteData.author.trim().length < 5 || quoteData.text.trim().length < 5) {
    throw { message: "Invalide input data provided. ", status: 422 };
  }

  const response = await axios.post(`${FIREBASE_DOMAIN}/quotes.json`, {
    ...quoteData,
  });

  if (response.statusText !== "OK") {
    throw new Error(quoteData.message || "Could not create quote.");
  }

  return null;
}

export async function addComment(requestData) {
  const response = await axios.post(
    `${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`,
    {
      ...requestData.commentData,
    }
  );
  const data = response.data;

  if (response.statusText !== "OK") {
    throw new Error(data.message || "Could not add comment.");
  }

  return { commentId: data.name };
}

export async function getAllComments(quoteId) {
  const response = await axios.get(
    `${FIREBASE_DOMAIN}/comments/${quoteId}.json`
  );

  const data = response.data;

  if (response.statusText !== "OK") {
    throw new Error(data.message || "Could not get comments.");
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
