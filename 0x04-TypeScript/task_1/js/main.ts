// Define the Teacher interface
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
  }
  
  // Create an instance a Teacher
  const teacher1: Teacher = {
    firstName: '',
    fullTimeEmployee: false,
    lastName: '',
    location: '',
    contract: false,
  };
  
  // Print the Teacher instance
  console.log(teacher1);  