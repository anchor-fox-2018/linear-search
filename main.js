function linearSearch(element,array) {
    let counter = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index]===element) {
            counter++;
        }       
    }
    if (counter===0) {
        return -1;
    }
    return counter;
}

console.log(linearSearch(18, [6,29,18,2,72,19,18,10,37]))
console.log(linearSearch(9, [6,29,18,2,72,19,18,10,37]))