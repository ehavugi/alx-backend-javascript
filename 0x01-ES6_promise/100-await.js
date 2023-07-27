import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photoData = await uploadPhoto();
  const userData = await createUser();
  if (photoData) {
    if (userData) {
      return { photo: photoData, user: userData };
    }
  }
  return { photo: null, user: null };
}
