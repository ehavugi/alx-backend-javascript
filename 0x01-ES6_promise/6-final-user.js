import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  uploadPhoto(fileName).then((photo) => {
    signUpUser(firstName, lastName).then((user) => [{ status: photo, value: user }], () => {
      console.log('Signup system offline');
    }, () => {
      console.log('Signup system offline');
      return Error();
    });
  });
}
