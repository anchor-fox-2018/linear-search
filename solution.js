//RELEASE 0
function linearSearch(target, arr) {
    return arr.indexOf(target);
}

let random_numbers = [6, 29, 18, 2, 72, 19, 18, 10, 37];
console.log(linearSearch(18, random_numbers)); //2
console.log(linearSearch(9, random_numbers)); //1
