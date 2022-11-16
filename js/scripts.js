// 1st draft
function luhnAlgorithm(number) {
  let numArray = number.split('');
  let intArray = numArray.map(function(element) {
    return parseInt(element);
  });
  let doubleEveryOther = [];
  for (let i = 1; i < intArray.length; i +=2) {
    doubleEveryOther.push(intArray[i] * 2);
  };

console.log(doubleEveryOther);
}

// 2nd draft
function luhnAlgorithm(number) {
  let numArray = number.split('');
  let intArray = numArray.map(function(element) {
    return parseInt(element);
  });
  let doubleEveryOther = [];
  for (let i = 0; i < intArray.length; i +=1) {
    if (i % 2 === 0 ) {
      doubleEveryOther.push(intArray[i] * 2);
    }
    else {
      doubleEveryOther.push(intArray[i]);
    }
  };

console.log(doubleEveryOther);
}