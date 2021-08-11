function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesTest = convertHoursToMinutes(2);
console.log('output of convertHoursToMinutes(2)', convertHoursToMinutesTest);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var getGreetingTest = getGreeting('Tim');
console.log('output of getGreeting(\'Tim\')', getGreetingTest);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Test = addAndMultiplyBy5(10, 5);
console.log('output of addAndMultiplyBy5(10, 5)', addAndMultiplyBy5Test);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var multiplyAndDivideBy5Test = multiplyAndDivideBy5(35, 10);
console.log('output of multiplyAndDivideBy5(35, 10)', multiplyAndDivideBy5Test);
