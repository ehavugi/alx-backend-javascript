import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto().then((data) => {
    createUser().then((user) => {
      console.log(data.body, user.firstName, user.lastName);
    }, () => {
      console.log('Signup system offline');
    }, () => {
      console.log('Signup system offline');
      return Error();
    });
  });
}
