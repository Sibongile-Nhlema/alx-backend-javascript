import { cpp } from './subjects/Cpp';
import { java } from './subjects/Java';
import { react } from './subjects/React';
import { Subjects } from './subjects/Teacher';

const cTeacher: Subjects.Teacher = {
  firstName: 'Sibongile',
  lastName: 'Nhlema',
  experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
