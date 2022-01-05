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

const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Mars', price: 1.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
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

// search function based on candy names and prices
const searchCandies = (name, price) => {
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  filterByPrice = candies.filter(candy => candy.price < price).map(candy => {
    return candy.name;
  });
  return filterByPrice.filter(candy => candy.startsWith(name));
};

module.exports = searchCandies;

// Testing functions

// console.log(addToBatch([1, 2, 3], 5));

// console.log(filterLongNumbers(numbers));
// console.log(filterLongNumbers(['4763687363', '7867867862']));
// console.log(filterLongNumbers([]));

// console.log(generateMessages(namesAndDiscounts));

// console.log(searchCandies('MA', 10));