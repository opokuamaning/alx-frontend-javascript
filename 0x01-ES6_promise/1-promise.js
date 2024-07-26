/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
export default function getFullResponseFromAPI(success) {
  const API = { status: 200, body: "Success" };
  const APIError = new Error("The fake API is not working currently");
  return new Promise((resolve, reject) => {
    if (success) {
      resolve(API);
    } else {
      reject(new Error(APIError));
    }
  });
}
