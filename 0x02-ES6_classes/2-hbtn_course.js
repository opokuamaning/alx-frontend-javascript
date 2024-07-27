/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse._validateName(name);
    this._length = HolbertonCourse._validateLength(length);
    this.students = HolbertonCourse._validateStudents(students);
  }

  // Getters and setters for name
  get name() {
    return this._name;
  }

  set name(value) {
    this.name = HolbertonCourse._validateName(value);
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = HolbertonCourse._validateLength(value);
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = HolbertonCourse._validateStudents(value);
  }

  // Private method to validate name
  static _validateName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return value;
  }

  // Private method to validate length
  static _validateLength(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return value;
  }

  // Private method to validate students
  static _validateStudents(value) {
    if (
      !Array.isArray(value)
      || !value.every((item) => typeof item === 'string')
    ) {
      throw new TypeError('Students must be an array of strings');
    }
    return value;
  }
}
