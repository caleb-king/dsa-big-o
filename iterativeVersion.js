function countingSheep(n) {
  for (let i = n; i > 0; i -= 1) {
    console.log(`${i}: Another sheep jumps over the fence`);
  }
  console.log('All sheep jumped over the fence');
}

// console.log(countingSheep(3));

function powerCalculator(base, exponent) {
  if (exponent <= 0) {
    return 'exponent should be >= 0';
  }
  let result = 1;
  for (let i = exponent; i > 0; i -= 1) {
    result *= base;
  }
  return result;
}

// console.log(powerCalculator(2, 4));

function reverseString(inputString) {
  let reversedString = '';
  for (let i = inputString.length - 1; i >= 0; i -= 1) {
    const lastLetter = inputString.charAt(i);
    reversedString = `${reversedString}${lastLetter}`;
  }
  return reversedString;
}

// console.log(reverseString('this is a test - kayak'));

function nthTriangularNumber(n) {
  let result = 0;
  for (let i = n; i > 0; i -= 1) {
    result += i;
  }
  return result;
}

// console.log(nthTriangularNumber(5));

function stringSplitter(inputString, splitter) {
  const splitArray = [];
  let previousSplitIndex = 0;
  for (let i = 0; i < inputString.length; i += 1) {
    if (inputString[i] === splitter) {
      splitArray.push(inputString.slice(previousSplitIndex, i));
      previousSplitIndex = i + 1;
    }
  }
  splitArray.push(inputString.slice(previousSplitIndex, inputString.length));
  return splitArray;
}

// console.log(stringSplitter('05/20/1889', '/'));

function fibonacci(n) {
  if (n === 1) return '1';
  if (n === 2) return '1, 1';
  const sequence = [1, 1];
  for (let i = 2; i < n; i += 1) {
    const prev2 = sequence[i - 2];
    const prev1 = sequence[i - 1];
    sequence.push(prev2 + prev1);
  }
  return sequence.join(', ');
}

// console.log(fibonacci(7));

function factorial(n) {
  if (n < 0) return 'n must be greater than or equal to 0';
  if (n === 0) return 1;
  let result = 1;
  for (let i = n; i > 0; i -= 1) {
    result *= i;
  }
  return result;
}

// console.log(factorial(5));
