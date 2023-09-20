const fs = require('fs');

function countStudents(fileName) {
  try {
    const data = fs.readFileSync(fileName, encoding = 'utf-8');
    const size = data.split('\n').length;
    const fields = new Map();
    for (let i = 0; i < size; i++) {
      const line = data.split('\n')[i];
      const linesize = line.length;
      if (linesize > 0) {
	     const student = line.split(',')[0];
	     const field = line.split(',')[3];
	     if (fields.has(field)) {
		     const value = fields.get(field);
		     value.push(student);
		     fields.set(field, value);
	     } else {
		     fields.set(field, new Array([student]));
        }
      }
    }
    console.log(`Number of students: ${size - 1}`);
    fields.forEach((value, key) => {
      console.log(`Number of students in ${key}: ${value.length}. List: ${value}`);
    });
  } catch (e) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
