const fs = require('fs'); // Подключаем модуль для работы с файлами

// Читаем входные данные из файла
const input = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1).map(Number);

// Инициализируем переменные для отслеживания текущей и максимальной длины последовательности
let currentLength = 0;
let maxLength = 0;

// Проходим по массиву и находим максимальную длину последовательности единиц
for (let i = 0; i < n; i++) {
  if (arr[i] === 1) {
    // Если текущий элемент равен 1, увеличиваем текущую длину
    currentLength++;
  } else {
    // Если текущий элемент не равен 1, сравниваем текущую длину с максимальной
    maxLength = Math.max(maxLength, currentLength);
    currentLength = 0; // Сбрасываем текущую длину
  }
}

// После завершения цикла нужно снова проверить текущую длину, так как последовательность может закончиться 1
maxLength = Math.max(maxLength, currentLength);

// Записываем результат в выходной файл
fs.writeFileSync('output.txt', String(maxLength));
