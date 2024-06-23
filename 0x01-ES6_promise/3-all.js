import { uploadPhoto, createUser } from './utils';
// import to get photo && Create user //

export default function handleProfileSignup() {
  return Promise // Promise Returned //
    .all([uploadPhoto(), createUser()]) // all element //
    .then((dt) => {
      console.log(`${dt[0].body} ${dt[1].firstName} ${dt[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
