
// 2nd draft
function doubleEveryOther(number) {
  let numArray = number.split('');
  let intArray = numArray.reverse().map(function(element) {
    return parseInt(element);
  });
  let doubleNum = [];
  for (let i = 0; i < intArray.length; i +=1) {
    if (i % 2 === 0 ) {
      doubleNum.push(intArray[i] * 2);
    }
    else {
      doubleNum.push(intArray[i]);
    }
  };
console.log(doubleNum);
}

// separate the double-digit numbers
function separateDoubleDigits(array) {
  stringOutput = array.join('');
  let numArray = stringOutput.split('');
  let intArray = numArray.map(function(element) {
    return parseInt(element);
  });
  return intArray;
}

// get sum of all numbers in the array
function sumOfElements(array) {
  let sum = 0;
  array.forEach(function(element) {
    sum += element; 
    return sum;
  });
  if (sum % 10 === 0) {
    return 'This is a valid credit card number.';
  }
  else {
    return 'This is not a valid credit card number.';
  }
}

// validate first digits + length of credit num
function validate(number) {
  
}