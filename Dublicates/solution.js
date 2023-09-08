const fs = require('fs');

const inputFileName = 'input.txt';
const outputFileName = 'output.txt';

const inputStream = fs.createReadStream(inputFileName, 'utf-8');
const outputStream = fs.createWriteStream(outputFileName);

let previousNumber = null;

inputStream.on('data', (chunk) => {
  const lines = chunk.split('\n');
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const currentNumber = Number(line);

    if (!isNaN(currentNumber)) {
      if (currentNumber != previousNumber) {
        outputStream.write(currentNumber + '\n');
      }
      previousNumber = currentNumber;
    }
  }
});

inputStream.on('end', () => {
  outputStream.end();
});
