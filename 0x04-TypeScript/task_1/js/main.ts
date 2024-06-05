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
    firstName: 'Thabo',
    fullTimeEmployee: false,
    lastName: 'Bester',
    location: 'Durban',
    contract: false,
  };

// Define the Directors interface extending Teacher
export interface Directors extends Teacher {
  numberOfReports: number;
}

// Create an instance of Directors
const director1: Directors = {
  firstName: 'Simon',
  lastName: 'Says',
  fullTimeEmployee: true,
  location: 'New Zealand',
  numberOfReports: 42,
};