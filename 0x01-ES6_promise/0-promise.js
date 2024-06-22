function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("API response received");
      } else {
        reject("API response failed");
      }
    }, 2000);
  });
}
export default function getResponseFromAPI;
