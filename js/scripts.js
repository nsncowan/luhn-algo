
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
return doubleNum;
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
  if (number.charAt(0) === '3' && number.charAt(1) === '4') {
    return 'American Express';
  }
  else if (number.charAt(0) === '3' && number.charAt(1) === '7') {
    return 'American Express';
  }
  else if (number.charAt(0) === '4') {
    return 'Visa';
  }
  else if (number.charAt(0) === '5') {
    return 'Mastercard';
  }
  else if (number.charAt(0) === '6') {
    return 'Discover';
  }
}

function handleFormSubmission(e) {
  e.preventDefault();
  
  const cardNumber = document.getElementById('userInput').value;
  const doubleEveryOther = doubleEveryOther(cardNumber);
  const separateDoubleDigits = separateDoubleDigits(doubleEveryOther);
  const sumOfElements = sumOfElements(separateDoubleDigits);
  const validate = validate(cardNumber);

  const form = document.getElementById('form');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  p1.append(validate);
  p2.append(sumOfElements);
  form.after(p1);
  p1.after(p2);
}

window.addEventListener('submit', handleFormSubmission);