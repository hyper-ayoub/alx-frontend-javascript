/// import uploadPhoto && createUser  from utils.js ///
/// async function => asyncUploadUser ///
///  call two functions  ///
/// return an object ///
/// If one of the async function fails, return an empty object. that mean return null ///

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo; let
    user;
  try {
    photo = await uploadPhoto();
    user = await createUser();
    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
