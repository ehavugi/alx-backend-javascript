export default function loadBalancer(chinaDownload, USDownload) {
  const fastest = Promise.race([chinaDownload, USDownload]).then((value) => value);
  return fastest;
}
