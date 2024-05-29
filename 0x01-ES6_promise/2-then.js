function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'Success' }))
    .catch(() => ({ error: {} }))
    .finally(() => {
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
