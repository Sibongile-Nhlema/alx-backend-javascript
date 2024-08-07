const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');

    const fieldCounts = {};
    const fieldLists = {};

    for (let i = 1; i < lines.length; i += 1) {
      const [firstname, , , field] = lines[i].split(',');
      if (field) {
        if (!fieldCounts[field]) {
          fieldCounts[field] = 0;
          fieldLists[field] = [];
        }
        fieldCounts[field] += 1;
        fieldLists[field].push(firstname);
      }
    }

    // Log total number of students
    const totalStudents = lines.length - 1;
    console.log(`Number of students: ${totalStudents}`);

    // Log details for each field
    for (const [field, count] of Object.entries(fieldCounts)) {
      const list = fieldLists[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
