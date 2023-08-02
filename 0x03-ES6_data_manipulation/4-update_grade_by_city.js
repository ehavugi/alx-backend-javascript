export default function update(students, city, newGrades) {
  if (Array.isArray(students)) {
    const cityStudents = students.filter((x) => x.location === city);
    const studentIdsGraded = newGrades.map((x) => x.studentId);
    const newGraded = cityStudents.map((x) => {
      const xx = { ...x };
      if (studentIdsGraded.includes(x.id)) {
        xx.grade = newGrades.filter((y) => y.studentId === x.id)[0].grade;
        return xx;
      }
      xx.grade = 'N/A';
      return xx;
    });
    return newGraded;
  }
  return [];
}
