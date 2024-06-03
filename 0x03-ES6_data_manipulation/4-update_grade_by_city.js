export default function updateStudentGradeByCity(listStudents, city, newGrades) {
    // Filter students based on the specified city
    const filteredStudents = listStudents.filter(student => student.location === city);

    // Iterate through filtered students and update their grades if found in newGrades
    const updatedStudents = filteredStudents.map(student => {
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