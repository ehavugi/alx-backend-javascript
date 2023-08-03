interface Student {
  firstname: string;
  lastName: string;
  age: number;
  location: string;
  }

const student1: Student = {
  firstName:'Hi',
  LastName: 'world',
  age: 1,
  location: 'AZ'
  };
const student2: Student = {
  firstName: 'Joe',
  lastName:'Doe',
  age: 100,
  location: 'Heaven'
  }
 
const studentList = [ student1, student2];
console.log(studentList);
