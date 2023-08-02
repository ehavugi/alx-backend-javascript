export default function getListStudentByLocation(students, city) {
  if (Array.isArray(students)) {
    return students.filter((x) => (x.location === city));
  }
  return [];
}
