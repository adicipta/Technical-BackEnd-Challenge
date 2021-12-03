/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  let miss = [];
  numbers.sort()
  for(let i in numbers) {
    let x = numbers[i] - numbers[i-1];
    let diff = 1;
    while(diff<x) {
      miss.push(numbers[i-1]+diff);
      diff++;
    }
  }
  return miss
}

console.log(result(numbers));
