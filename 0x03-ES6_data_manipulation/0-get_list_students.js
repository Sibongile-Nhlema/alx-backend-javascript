export default function getListStudents() {
    const students = [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];

    students.forEach(student => {
        if (typeof student.id !== 'number') {
            throw new TypeError('id must be a number');
        }
        if (typeof student.firstName !== 'string') {
            throw new TypeError('firstName must be a string');
        }
        if (typeof student.location !== 'string') {
            throw new TypeError('location must be a string');
        }
    });

    return students;
}