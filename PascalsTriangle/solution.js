/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var solution = new Array(numRows);
  var count = 1;
  for (var index = 0; index < numRows; index++) {
    solution[index] = new Array(count);
    count++;
  }
  solution[0][0] = 1;

  if (numRows == 1) {
    return solution;
  }
  for (var lengthOfRow = 2; lengthOfRow <= numRows; lengthOfRow++) {
    // callculate length of the lengthOfRow
    let firstIndex = 0;
    let lastIndex = lengthOfRow - 1;
    let currentRowIndex = lengthOfRow - 1;

    // fill the first and the last positions of arrays with ones
    solution[currentRowIndex][firstIndex] = 1;
    solution[currentRowIndex][lastIndex] = 1;

    // callcaulate the pointers
    var firstPointer = firstIndex + 1;
    var secondPointer = lastIndex - 1;

    //callcaulate the previous lengthOfRow index
    let previousRowIndex = lengthOfRow - 2;

    // loop for filling the gaps of array. actual pascapls triganle callculation
    // method - two pointers
    while (firstPointer < secondPointer) {
      solution[currentRowIndex][firstPointer] =
        solution[previousRowIndex][firstPointer - 1] +
        solution[previousRowIndex][firstPointer];

      //increment for loop to finish
      firstPointer = firstPointer + 1;

      solution[currentRowIndex][secondPointer] =
        solution[previousRowIndex][secondPointer - 1] +
        solution[previousRowIndex][secondPointer];

      //decrement for loop to finish
      secondPointer = secondPointer - 1;
    }

    // filling the last gap of array when pointers has met each other
    if (firstPointer == secondPointer) {
      solution[currentRowIndex][firstPointer] =
        solution[previousRowIndex][firstPointer - 1] +
        solution[previousRowIndex][firstPointer];
    }
  }

  return solution;
};
