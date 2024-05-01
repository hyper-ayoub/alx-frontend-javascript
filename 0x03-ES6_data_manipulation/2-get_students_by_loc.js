export default (array, location) => {
  let newArr = [];
  if (!Array.isArray(array)) {
    return newArr;
  }
  newArr = array.filter((student) => student.location === location);
  return newArr;
};
