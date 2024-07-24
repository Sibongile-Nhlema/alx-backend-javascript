import fs from 'fs/promises';

export const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const studentFields = {};

    for (const line of lines.slice(1)) {
      const [firstname, , , field] = line.split(',');
      if (firstname && field) {
        if (!studentFields[field]) {
          studentFields[field] = [];
        }
        studentFields[field].push(firstname);
      }
    }

    return studentFields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
