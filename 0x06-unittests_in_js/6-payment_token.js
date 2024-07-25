const getPaymentTokenFromAPI = (success) => {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({ data: 'Successful response from the API' });
      } else {
        // No action needed
        resolve();
      }
    });
  };
  
  module.exports = getPaymentTokenFromAPI;