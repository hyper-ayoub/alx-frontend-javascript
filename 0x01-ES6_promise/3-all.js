import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      const { body } = photo;
      const { firstName, lastName } = user;
      console.log(body, firstName, lastName);
    })
    .catch(() => {
      console.log("Signup system offline");
    });
}
