export default function hasValuesFromArray(set, arr) {
  // Convert the set to an array for easier comparison
  const setArray = Array.from(set);

  // Check if every element in the array is present in the set
  const allValuesExist = arr.every((element) => setArray.includes(element));

  return allValuesExist;
}
