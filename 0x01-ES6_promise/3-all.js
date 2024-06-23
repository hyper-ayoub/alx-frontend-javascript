import {uploadPhoto, createUser} from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
  .then(([photo, User]) => {
    const {body} = photo;
    const {firstName,lastName} = User;
    console.log(body, firstName, lastName);
  })
  .catch(() => {
    console.log("Signup system offline");
  });
}
