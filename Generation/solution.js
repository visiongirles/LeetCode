const fs = require('fs');

function generateParentheses(n) {
  const result = [];

  function generate(current, open, close) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) {
      generate(current + '(', open + 1, close);
    }

    if (close < open) {
      generate(current + ')', open, close + 1);
    }
  }

  generate('', 0, 0);
  return result;
}

const n = Number(fs.readFileSync('input.txt', 'utf-8').trim());
const output = generateParentheses(n).sort();

fs.writeFileSync('output.txt', output.join('\n'));
console.log('Готово.');
