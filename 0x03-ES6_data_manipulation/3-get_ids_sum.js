export default function getStudentIdsSum(id) {
  if (!Array.isArray(id)) {
    return [];
  }
  return id.reduce((sum, current) => sum + current, 0);
}
