const { assert } = require('console');

let text1 = 'abcddc';
let subString1 = 'ccde';

let text2 = 'abc';
let subString2 = 'ccde';

let text3 = 'abcd';
let subString3 = 'dcba';

let text4 = 'abcd';
let subString4 = 'abef';

function findMagic(text, subString) {
  let answer = -1;
  if (text.length < subString.length) return answer;
  let hashTable = new Map();
  let finalIndex = text.length - subString.length;
  let array = [...Array(finalIndex + 1).keys()];

  for (let index = 0; index < text.length; index++) {
    if (hashTable.get(text[index]) === undefined) {
      hashTable.set(text[index], 1);
    } else {
      let newValue = hashTable.get(text[index]) + 1;
      hashTable.set(text[index], newValue);
    }
  }

  for (let index = 0; index < subString.length; index++) {
    if (hashTable.get(subString[index]) === undefined) {
      hashTable.set(subString[index], 1);
    } else {
      let newValue = hashTable.get(subString[index]) + 1;
      hashTable.set(subString[index], newValue);
    }
  }

  for (let index = 0; index < text.length; index++) {
    console.log(
      'key: ' + text[index] + ', value:' + hashTable.get(text[index])
    );
  }

  return answer;
}

assert(findMagic(text1, subString1) == 2, 'Assert 1 failed');
assert(findMagic(text2, subString2) == 5, 'Assert 2 failed');
assert(findMagic(text3, subString3) == -1, 'Assert 3 failed');
assert(findMagic(text4, subString4) == -1, 'Assert 4 failed');
