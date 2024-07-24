const http = require('http');
const fs = require('fs').promises;
const url = require('url');

const port = 1245;

const countStudents = async (path) => {
  try {
    // Try to read the file asynchronously
    const data = await fs.readFile(path, 'utf8');

    // Split the content by lines and filter out empty ones
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const fieldCounts = {};
    const fieldLists = {};

    // Process every line after the header
    for (let i = 1; i < lines.length; i += 1) {
      const [firstname, , , field] = lines[i].split(',');
      if (firstname && field) {
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
    let output = `Number of students: ${totalStudents}\n`;

    // Log details for each field
    for (const [field, count] of Object.entries(fieldCounts)) {
      const list = fieldLists[field].join(', ');
      output += `Number of students in ${field}: ${count}. List: ${list}\n`;
    }

    return output.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

const app = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (reqUrl.pathname === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    const databasePath = process.argv[2];
    if (databasePath) {
      try {
        const studentsData = await countStudents(databasePath);
        res.end(studentsData);
      } catch (error) {
        res.end(error.message);
      }
    } else {
      res.end('No database provided');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
