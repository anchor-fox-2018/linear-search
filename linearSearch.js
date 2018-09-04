// Release 0
// function LinearSearch(num, arr) {
//   return arr.indexOf(num);
// }
// let random_numbers = [6,29,18,2,72,19,18,10,37];
//
// console.log(LinearSearch(18, random_numbers)); // 2
// console.log(LinearSearch(9, random_numbers)); // -1

//Release 1
function globalLinearSearch(str, arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      result.push(i);
    }
  }
  return result;
}

let banana_arr = "banana".split("");

console.log(globalLinearSearch("a", banana_arr)); //[1,3,5]
