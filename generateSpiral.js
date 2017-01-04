/*

SPIRAL:

[ 
  [1, 2, 3, 4],
  [10, 11, 12, 5],
  [9, 8, 7, 6]
]

*/

let generateSpiral = (m, n) => {
  const maxValue = m * n;
  let result = [];

  for (let i = 1; i <= n; i++) {
    result.push([]);
  }

  result[0].push(1);

  let currentLoc = [0, 0]
  let direction = 'right';

  let placeValue = (value) => {
    if (value > maxValue) {
      return;
    }

    if (direction === 'right') {
      if (currentLoc[1] === m - 1 || result[currentLoc[0]][currentLoc[1] + 1]) {
        direction = 'down';
        return placeValue(value);
      } else {
        currentLoc[1]++;
      }
    } else if (direction === 'down') {
      if (currentLoc[0] === n - 1 || result[currentLoc[0] + 1][currentLoc[1]]) {
        direction = 'left';
        return placeValue(value);
      } else {
        currentLoc[0]++;
      }
    } else if (direction === 'left') {
      if (currentLoc[1] === 0 || result[currentLoc[0]][currentLoc[1] - 1]) {
        direction = 'up';
        return placeValue(value);
      } else {
        currentLoc[1]--;
      }
    } else { // up
      if (currentLoc[0] === 0 || result[currentLoc[0] - 1][currentLoc[1]]) {
        direction = 'right';
        return placeValue(value);
      } else {
        currentLoc[0]--;
      }
    }

    result[currentLoc[0]][currentLoc[1]] = value;

    placeValue(value + 1);

  };

  placeValue(2);

  return result;

};
