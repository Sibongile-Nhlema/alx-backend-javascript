export default function getStudentIdsSum(listOfStudents) {
  const initialValue = 0;
  const callback = (accumulator, currentValue) => accumulator + currentValue.id;

  const sumOfStudentIds = listOfStudents.reduce(callback, initialValue);
  return sumOfStudentIds;
}
