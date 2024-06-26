import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  try {
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo: photoResponse, user: userResponse };
  } catch (error) {
    console.error('An error occurred:', error);
    return { photo: null, user: null };
  }
};

export default asyncUploadUser;
