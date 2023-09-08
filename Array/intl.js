const name1 = ['Joe', 'Anna', 'Timmy', 'Lydia'];
const name2 = ['Charity', 'Chris', 'Sarah'];
const name3 = ['Marni', 'Brandon'];

const formatNamesArray = new Intl.ListFormat('en-US');

console.log(formatNamesArray.format(name1));

const num1 = 123454;
const num2 = 1234;
const num3 = 123454456;

console.log(
  num1.toLocaleString('ar-EG', {
    style: 'currency',
    currency: 'USD',
  })
);
