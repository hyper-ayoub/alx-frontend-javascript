// 1-get_list_student_ids.js
export default function getListStudentIds(list) {
  // Check if the argument is an array
  if (!Array.isArray(list)) {
    return [];
  }
  return list.map(student => student.id);
  }
}
