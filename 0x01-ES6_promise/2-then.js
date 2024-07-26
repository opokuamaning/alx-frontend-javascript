/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
// eslint-disable-next-line import/extensions
export default function handleResponseFromAPI(promise) {
  return (
    promise.then(() => {
      console.log("Got a response from the API");
      return {
        status: 200,
        body: "success",
      };
    }),
    () => {
      console.log("Got a response from the API");
      return new Error();
    }
  );
}
