/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

import  signUpUser  from "./4-user-promise.js";
import  uploadPhoto  from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise]).then((res) => {
    const results = [];
    res.forEach((result) => {
        if(result.status === 'fulfilled') {
            results.push({ status: result.status, value: result.value });
        } else {
            results.push({ status: result.status, value: result.reason.message });
        }
    });
    return results;
  });
}
