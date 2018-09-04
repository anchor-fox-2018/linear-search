//Release 0
let random_numbers = [6, 29, 18, 2, 72, 19, 18, 10, 37];
function linearSearch(num, arr){
    for (var i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(18, random_numbers));//2
console.log(linearSearch(9, random_numbers));//-1

// Release 1
let banana_arr = 'banana'.split('');
// console.log(banana_arr);

function globalLinearSearch(str, array){
    debugger;
    var output = [];
    for (var j = 0; j < array.length; j++){
        if(str == array[j] ){
            output.push(j)
        }
    }
    return output;
}

console.log(globalLinearSearch('a', banana_arr));
