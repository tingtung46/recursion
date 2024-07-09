function fibs(num) {
  let num1 = 0;
  let num2 = 1;
  let sum;
  let arrayResult = [];

  arrayResult.push(num1);
  arrayResult.push(num2);

  for (let i = 2; i < num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;

    arrayResult.push(num2);
  }

  return arrayResult;
}

console.log(fibs(5));

function fibsRecArray(num) {
  let arrayResult = [];

  function fibsRec(num) {
    if (num < 2) return num;

    return fibsRec(num - 1) + fibsRec(num - 2);
  }

  for (let i = 0; i < num; i++) {
    arrayResult.push(fibsRec(i));
  }

  return arrayResult;
}

console.log(fibsRecArray(5));
