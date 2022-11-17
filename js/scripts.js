
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
  else {
    return "I don't recognize this kind of card.";
  }
}

function handleFormSubmission(e) {
  e.preventDefault();
  const form = document.getElementById('form');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');

  const cardNumber = document.getElementById('userInput').value;
  const double = doubleEveryOther(cardNumber);
  const separate = separateDoubleDigits(double);
  const sum = sumOfElements(separate);
  const checkNum = validate(cardNumber);

  p1.append(checkNum);
  p2.append(sum);
  form.after(p1);
  p1.after(p2);
  document.getElementById('form').reset();
}

window.addEventListener('submit', handleFormSubmission);