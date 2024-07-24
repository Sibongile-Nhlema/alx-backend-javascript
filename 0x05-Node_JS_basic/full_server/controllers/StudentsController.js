import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const databasePath = process.argv[2];
    try {
      const students = await readDatabase(databasePath);
      res.status(200).write('This is the list of our students\n');
      for (const field of Object.keys(students).sort()) {
        const count = students[field].length;
        const list = students[field].join(', ');
        res.write(`Number of students in ${field}: ${count}. List: ${list}\n`);
      }
      res.end();
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const databasePath = process.argv[2];
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const students = await readDatabase(databasePath);
      if (!students[major]) {
        res.status(200).send('List:');
      } else {
        res.status(200).send(`List: ${students[major].join(', ')}`);
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
