'use strict';

function gettingNum(target, current = 1, description = '1') {
  if (target === current) {
    return description;
  }
  if (target < current) {
    return null;
  }

  return (
    gettingNum(target, current + 5, `(${description} + 5)`) ||
    gettingNum(target, current * 3, `(${description} * 3)`)
  );
}

console.log(gettingNum(21));
console.log(gettingNum(15));
