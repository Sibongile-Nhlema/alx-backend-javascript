const fs = require('fs');
const path = require('path');

// Function to count students from the database file
function countStudents(filePath) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(filePath, 'utf8');

    // Split the content by lines and filter out empty lines
    const lines = data.trim().split('\n').filter(line => line.trim());

    // Check if there are enough lines for header and data
    if (lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    // Get the header and data lines
    const header = lines[0].split(',');
    const students = lines.slice(1);

    const fieldCounts = {};
    const fieldNames = {};

    students.forEach(student => {
      const [firstName, , , field] = student.split(',');
      if (!fieldCounts[field]) {
        fieldCounts[field] = [];
      }
      fieldCounts[field].push(firstName);
    });

    // Print total number of students
    console.log(`Number of students: ${students.length}`);

    // Print the number of students per field and the list of names
    Object.keys(fieldCounts).forEach(field => {
      const names = fieldCounts[field].join(', ');
      console.log(`Number of students in ${field}: ${fieldCounts[field].length}. List: ${names}`);
    });

  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
