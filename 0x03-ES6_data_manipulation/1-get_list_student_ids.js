// 1-get_list_student_ids.js
 export default function getListStudentIds(arg) {
  // Check if the argument is an array
  if (!Array.isArray(arg)) {
    return [];
  }

  // Use map function to extract ids from objects in the array
  return arg.map((arg) => arg.id);
}
