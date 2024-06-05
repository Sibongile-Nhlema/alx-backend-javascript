// Define the interface for a Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two instances of Student
const student1: Student = {
  firstName: 'John',
  lastName: 'Cena',
  age: 22,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Shaun',
  lastName: 'Michaels',
  age: 21,
  location: 'Los Angeles'
};

// Array containing both students
const studentsList: Student[] = [student1, student2];

// Function to render the table in the browser
function renderTable(students: Student[]) {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  students.forEach((student) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

// Render the table
renderTable(studentsList);

