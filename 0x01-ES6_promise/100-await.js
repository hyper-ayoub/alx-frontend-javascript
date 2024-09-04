/// import uploadPhoto && createUser  from utils.js ///
/// async function => asyncUploadUser ///
///  call two functions  ///
/// return an object ///
/// If one of the async function fails, return an empty object. that mean return null ///

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo; let  // define the 2 objet //
    user;
  try {
    photo = await uploadPhoto(); // use await for function //
    user = await createUser(); // use await for function //
    return {
      photo, // return the objet photo //
      user, // return the objet user //
    };
  } catch (error) {
    return {
      photo: null, // return null for fails //
      user: null, // return null for fails //
    };
  }
}
