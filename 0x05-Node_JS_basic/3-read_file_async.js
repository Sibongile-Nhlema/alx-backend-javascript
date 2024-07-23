const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Try to read the file asynchronously
    const data = await fs.readFile(path, 'utf8');

    // Split the content by lines and filter out empty ones
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const fieldCounts = {};
    const fieldLists = {};

    // Process every line after the header
    for (let i = 1; i < lines.length; i++) {
      const [firstname, , , field] = lines[i].split(',');
      if (firstname && field) {
        if (!fieldCounts[field]) {
          fieldCounts[field] = 0;
          fieldLists[field] = [];
        }
        // Replace unary operator with equivalent code
        fieldCounts[field] = fieldCounts[field] + 1;
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
