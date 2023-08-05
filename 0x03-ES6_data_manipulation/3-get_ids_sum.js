export default function getStudentIdsSum(students) {
  const initialValue = 0;
  if (Array.isArray(students)) {
    const studentIds = students.map((x) => x.id);
    return studentIds.reduce((total, currentId) => (total + currentId), initialValue);
  }
  return 0;
}
