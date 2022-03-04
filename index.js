// function hasTargetSum(array, target) {
//   array.forEach(num => {
//     let difference;
//     difference = target - num;
//     array.forEach(num2 => {
//       if(num2 === difference) {
//         return true;
//       } else {
//         return false;
//       }
//     })
//   })
// }

function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++) {
    const difference = target - array[i];
    for(let j = i + 1; j < array.length; j++) {
      if(difference === array[j]) {
        return true;
      }
    }
  } return false;
}

// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === complement) return true;
//     }
//   }
//   return false;
// }

/* 
  0(n) for the first forEach, plus another forEach 0(n) making it quadratic, no good.
  Two loops are needed.
*/

/* 
  Loop over the array
    find the difference between the target and element (10-3 =7)
    if difference === the element
      return true
      stop running once it's true
    else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
//   // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
