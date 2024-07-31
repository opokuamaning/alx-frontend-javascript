// Description: Get students by location
export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents().filter((student) => student.location === city);
}
