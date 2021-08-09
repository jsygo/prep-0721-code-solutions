var person = { firstName: 'John', lastName: 'Doe', hobby: 'hiking' };
console.log('person object:', person);
var fullName = person.firstName + ' ' + person.lastName;
console.log('The persons full name is: ' + fullName + '.');
person.job = 'web developer';
console.log('The persons job is: ' + person.job + '.');
person.previousJob = 'bartender';
console.log('The persons previous job was: ' + person.previousJob + '.');
console.log('The complete person object is: ', person);
