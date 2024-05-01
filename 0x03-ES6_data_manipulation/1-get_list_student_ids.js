// 1-get_list_student_ids.js
 export default function getListStudentIds(list) {
  // Check if the argument is an array
  if (!Array.isArray(list)) {
    return [];
  }

  // Use map function to extract ids from objects in the array
  return list.map(student => student.id);
}
