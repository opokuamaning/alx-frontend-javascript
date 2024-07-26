/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
// eslint-disable-next-line import/extensions
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ 
        status: 200, 
        body: "Success"
    });
    } else {
      reject(new Error("The fake API is not working currently"));
    }
  });
}
