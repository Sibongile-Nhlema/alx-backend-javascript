export default function updateStudentGradeByCity(listStudents, city, newGrades) {
    // Filter students based on the specified city
    const filterStudents = listStudents.filter(student => student.location === city);

    // Iterate through filtered students and update their grades if found in newGrades
    const updatedStudents = filterStudents.map(student => {
        const gradeObj = newGrades.find(grade => grade.studentId === student.id);
        if (gradeObj) {
            student.grade = gradeObj.grade;
        } else {
            student.grade = 'N/A';
        }
        return student;
    });

    return updatedStudents;
}