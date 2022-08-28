const sumAll = function (firstNum, lastNum) {
  if (!Number.isInteger(firstNum) || !Number.isInteger(lastNum)) return "ERROR";
  if (firstNum < 0 || lastNum < 0) return "ERROR";
  if (firstNum > lastNum) {
   const temp = firstNum;
   firstNum = lastNum;
   lastNum = temp;
  }
  let total = 0;
  for (let i = firstNum; i <= lastNum; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
