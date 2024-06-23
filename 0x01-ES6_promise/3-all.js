import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
  .all([uploadPhoto(), createUser()])
  .then(([]) => {
    console.log(body, firstName, lastName);
  })
  .catch(() => {
    console.log("Signup system offline");
  });
}
