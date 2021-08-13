for (let i = 0; i < 10; i++) {
  if (i === 0) {
    console.log('start of loop 1');
  }
  console.log(i);
}

for (let j = 0; j < 20; j = j + 2) {
  if (j === 0) {
    console.log('start of loop 2');
  }
  console.log(j);
}

for (let k = 100; ; k--) {
  if (k === 100) {
    console.log('start of loop 3');
  }
  console.log('Time till explosion: ' + k);
  if (k === 0) {
    console.log('BOOM!!!');
    break;
  }
}
