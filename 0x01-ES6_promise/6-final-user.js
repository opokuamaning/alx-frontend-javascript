/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

import { signUpUser } from "./6-user-promise.js";
import { uploadPhoto } from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);

  return Promise.all([promise1, promise2])
    .then((values) => {
      console.log(
        `${values[0].firstName} ${values[0].lastName} ${values[1].body}`
      );
    })
    .catch(() => {
      console.log("Signup system offline");
    });
}
