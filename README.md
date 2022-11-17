describe: doubleEveryOther();

test: "return input number as an array of numbers, and reverse the order."
code: doubleEveryOther('123456789');
expected output: [9,8,7,6,5,4,3,2,1];

test: "double every other element of the array (starting with last element), and return new array of doubled and non-doubled elements"
code: doubleEveryOther('123456789');
expected output: [9,16,7,12,5,8,3,4,1]

describe: separateDoubleDigits();

test: "convert input array of numbers into string"
code: separateDoubleDigits([4,12,0,86]);
expected output: "412086";

test: "convert string into new array of numbers"
code: separateDoubleDigits([4,12,0,86]);
string output = "412086";
expected output = [4,1,2,0,8,6]

describe: validate(number);

test: "return 'American Express' if the number begins with '34' or '37'
code: validate('3478845332221546')
expected output: 'American Express'

test: return 'Visa' if the num begins with '4';
code: validate('40478845332221546')
expected output: 'Visa'

test: return 'Mastercard' if the num begins with '5';
code: validate('5478845332221546')
expected output: 'Mastercard'

test: return 'Discover' if the num begins with '6';
code: validate('678845332221546')
expected output: 'Discover'

test:
code:
expected output: 

test:
code:
expected output: 

test:
code:
expected output: 