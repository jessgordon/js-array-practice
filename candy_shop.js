const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' 
];

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

// add number to a batch of ids if there are less than 5 ids already in the array
const addToBatch = (array, number) => {
  if (array.length < 5) {
    return array.concat(number);
  } 
    return array
}

// filter out corrupt data from a list of customer phone numbers by length
const checkLength = (number) => {
  return number.length <= 10;
}

const filterLongNumbers = (numbersArray) => {
  return numbersArray.filter(checkLength);
}

// personalised text message using map function
const generateMessages = (customersArray) => {
  return customersArray.map(customer => {
    return `Hi ${customer.name}! ${customer.discount}% off our best candies for you today!`;
  });
}


// Testing functions

// console.log(addToBatch([1, 2, 3], 5));

// console.log(filterLongNumbers(numbers));
// console.log(filterLongNumbers(['4763687363', '7867867862']));
// console.log(filterLongNumbers([]));

// console.log(generateMessages(namesAndDiscounts));