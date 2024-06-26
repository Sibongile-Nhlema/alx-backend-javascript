// Task 5

// Defining various interfaces with the 3 expected methods

// Define DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // Define TeacherInterface
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Implement Director class
  export class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
  
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
  
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }
  
  // Implement Teacher class
  export class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
  
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
  
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }
  
  // Create createEmployee function
  export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
// Task 6

  // Function to check if employee is a Director
export function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
  return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if(isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Task 7

// String literal type for Subjects
export type Subjects = 'Math' | 'History';

// Function to teach class based on subject
export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}