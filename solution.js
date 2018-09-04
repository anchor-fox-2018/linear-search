/*
//RELEASE 0
function linearSearch(target, arr) {
    return arr.indexOf(target);
}

let random_numbers = [6, 29, 18, 2, 72, 19, 18, 10, 37];
console.log(linearSearch(18, random_numbers)); //2
console.log(linearSearch(9, random_numbers)); //1
*/


//RELEASE 1

function globalLinearSearch(target, arr) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            result.push(i);
        }
    }
    return result;
}

let banana_arr = 'banana'.split('');
console.log(globalLinearSearch('a', banana_arr))