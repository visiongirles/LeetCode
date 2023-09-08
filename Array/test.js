var getI18nText = require('./input.js');

// const result = getI18nText({
//   stringTokens: [['@number', 56789.01, 'USD']],
//   locale: 'ru-RU',
// });

const result = getI18nText({
  stringTokens:  [["@number", "$var", "USD"]],
  { var: 123456789.0123 },
  {},
});



console.log(result);
