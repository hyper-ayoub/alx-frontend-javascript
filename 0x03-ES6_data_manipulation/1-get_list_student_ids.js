export default function getListStudentIds(arg) {
  // check if the argument is not array ///
  if (Array.isArray(arg)) {
    return arg.map((arg) => arg.id);
  }
  return [];
}
