// class name HolbertonCourse //
// contribute name, length, students //
// verify the type of attributes during object creation//
// Each attribute must be stored in an “underscore” attribute version//
// Implement a getter and setter for each attribute. //

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name with type check
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length with type check
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students with type check
  set students(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
