function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Obtained API response');
    }, 2000);
  });
}

export default getResponseFromAPI;
