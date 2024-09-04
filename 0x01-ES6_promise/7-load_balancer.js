// load balancer //
// function loadBalancer //
// chinaDownload && USDownload //
// The function should return the value returned by the promise that resolved the first. //

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]); // use race here //
}
