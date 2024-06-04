const weakMap = new WeakMap();

export { weakMap };

// Query the API and track the number of calls for each endpoint
export function queryAPI(endpoint) {
  // Check if the endpoint exists in the weakMap
  if (weakMap.has(endpoint)) {
    let count = weakMap.get(endpoint);
    count += 1;

    weakMap.set(endpoint, count);

    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    // If the endpoint is not in the weakMap, initialize count to 1
    weakMap.set(endpoint, 1);
  }
}
