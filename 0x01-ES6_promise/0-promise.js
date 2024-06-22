// Return a Promise using this prototype function getResponseFromAPI() //

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("API response received");
      } else {
        reject("API response failed");
      }
    }, 2000); // Simulate a delay of 2 seconds
  });
}

export default getResponseFromAPI;
