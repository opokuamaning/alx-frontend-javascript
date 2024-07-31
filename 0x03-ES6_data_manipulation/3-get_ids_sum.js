export default function getStudentIdsSum(getStudent) {
//   if (!Array.isArray(getStudent)) {
//     return [];
//   }
  return getStudent.reduce((sum, current) => sum + current, 0);
}
