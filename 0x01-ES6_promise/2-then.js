export default function getFullResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
    return { status: 200, body: 'sucess' };
  }, () => {
    console.log('Got a response from the API');
    return Error();
  });
}
