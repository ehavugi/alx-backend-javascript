export default function getResponseFromAPI() {
  return new Promise(function(resolve, reject) {
    if (true) {
      resolve("Done deal");
    }
    else {
      reject(Error("Nope"));
    }
});
}
