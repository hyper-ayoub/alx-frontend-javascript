export default function appendToEachArrayValue(array, appendString) {
  const ayoubArray = []; // start with NULL //
  for (const value of array) { // loop using for and of //
    ayoubArray.push(appendString + value); // content f array //
  }
  return ayoubArray;
}
