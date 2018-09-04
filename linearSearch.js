function LinearSearch(num, arr) {
  return arr.indexOf(num);
}
let random_numbers = [6,29,18,2,72,19,18,10,37];

console.log(LinearSearch(18, random_numbers)); // 2
console.log(LinearSearch(9, random_numbers)); // -1
