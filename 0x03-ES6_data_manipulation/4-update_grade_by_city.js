export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  // Filter students based on the specified city
  const filterStudents = listStudents.filter((student) => student.location === city);

  // Iterate through filtered students and update their grades if found in newGrades
  const updatedStudents = filterStudents.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    const updatedStudent = { ...student };
    if (gradeObj) {
      updatedStudent.grade = gradeObj.grade;
    } else {
      updatedStudent.grade = 'N/A';
    }
    return updatedStudent;
  });
  return updatedStudents;
}
