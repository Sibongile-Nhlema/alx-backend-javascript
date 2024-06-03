export default function getStudentsByLocation(listOfStudents, city) {
  // return an array of objects located in a specific city.
  const filterStudents = listOfStudents.filter((student) => student.location === city);
  return filterStudents;
}
