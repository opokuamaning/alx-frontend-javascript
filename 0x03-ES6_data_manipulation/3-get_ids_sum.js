export default function getStudentIdsSum(getStudent) {
  return getStudent.reduce((sum, current) => sum + current, 0);
}
