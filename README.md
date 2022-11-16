describe: doubleEveryOther();

test: "return input number as an array of numbers"
code: doubleEveryOther(123456789);
expected output: [1,2,3,4,5,6,7,8,9];

test: "double every other element of the array (starting with last element), and return new array of doubled and non-doubled elements"
code: doubleEveryOther(123456);
expected output: [1,4,3,8,5,12];

describe: separateDoubleDigits();

test: "convert input array of numbers into string"
code: separateDoubleDigits([4,12,0,86]);
expected output: "412086";

test: "convert string into new array of numbers"
code: separateDoubleDigits([4,12,0,86]);
string output = "412086";
expected output = [4,1,2,0,8,6]